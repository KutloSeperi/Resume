import { afterEach, describe, expect, it, vi } from 'vitest'
import { checkDailyChatLimit, getClientIp } from './chat-rate-limit'

describe('chat rate limit', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
  })

  it('gets the client IP from the server headers', () => {
    expect(getClientIp({ 'x-real-ip': '203.0.113.1' })).toBe('203.0.113.1')
    expect(getClientIp({ 'x-forwarded-for': '203.0.113.2, 10.0.0.1' })).toBe('203.0.113.2')
    expect(getClientIp({})).toBeNull()
  })

  it('counts ten messages per IP per UTC day', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.stubEnv('UPSTASH_REDIS_REST_URL', 'https://redis.example')
    vi.stubEnv('UPSTASH_REDIS_REST_TOKEN', 'test-token')
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ result: 10 }), { status: 200 })
    )
    vi.stubGlobal('fetch', fetchMock)

    const result = await checkDailyChatLimit('203.0.113.1', new Date('2026-11-06T14:00:00.000Z'))

    expect(result).toEqual({
      allowed: true,
      remaining: 0,
      resetAt: '2026-11-07T00:00:00.000Z'
    })
    expect(fetchMock).toHaveBeenCalledWith(
      'https://redis.example',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({ Authorization: 'Bearer test-token' }),
        body: expect.stringContaining('"chat:daily:2026-11-06:')
      })
    )
  })

  it('blocks messages after the daily limit', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.stubEnv('UPSTASH_REDIS_REST_URL', 'https://redis.example')
    vi.stubEnv('UPSTASH_REDIS_REST_TOKEN', 'test-token')
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response(JSON.stringify({ result: 11 }), { status: 200 }))
    )

    await expect(checkDailyChatLimit('203.0.113.1')).resolves.toMatchObject({
      allowed: false,
      remaining: 0
    })
  })

  it('does not limit local development when Redis is not configured', async () => {
    vi.stubEnv('NODE_ENV', 'development')
    vi.stubEnv('UPSTASH_REDIS_REST_URL', '')
    vi.stubEnv('UPSTASH_REDIS_REST_TOKEN', '')

    let result = await checkDailyChatLimit('local-dev-user', new Date('2026-11-06T14:00:00.000Z'))
    for (let count = 0; count < 20; count++) {
      result = await checkDailyChatLimit('local-dev-user', new Date('2026-11-06T14:00:00.000Z'))
    }

    expect(result).toMatchObject({ allowed: true, remaining: 10 })
  })

  it('reports missing rate-limit configuration', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.stubEnv('UPSTASH_REDIS_REST_URL', '')
    vi.stubEnv('UPSTASH_REDIS_REST_TOKEN', '')

    await expect(checkDailyChatLimit('203.0.113.1')).rejects.toThrow(
      'Chat rate limiting requires UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.'
    )
  })
})
