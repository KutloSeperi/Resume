import { createHash } from 'node:crypto'

const DAILY_LIMIT = 10
const INCREMENT_AND_SET_EXPIRY =
  "local count = redis.call('INCR', KEYS[1]); if count == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end; return count"

interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetAt: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export function getClientIp(
  headers: Record<string, string | string[] | undefined>
): string | null {
  const realIp = headers['x-real-ip']
  if (typeof realIp === 'string' && realIp.trim()) return realIp.trim()

  const forwardedFor = headers['x-forwarded-for']
  const firstForwardedIp = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor?.split(',')[0]
  return firstForwardedIp?.trim() || null
}

export async function checkDailyChatLimit(clientIp: string, now = new Date()): Promise<RateLimitResult> {
  const tomorrow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1))
  const resetAt = tomorrow.toISOString()

  if (process.env.NODE_ENV !== 'production') {
    return { allowed: true, remaining: DAILY_LIMIT, resetAt }
  }

  const redisUrl = process.env.UPSTASH_REDIS_REST_URL
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!redisUrl || !redisToken) {
    throw new Error('Chat rate limiting requires UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.')
  }

  const ttlSeconds = Math.ceil((tomorrow.getTime() - now.getTime()) / 1000)
  const ipHash = createHash('sha256').update(clientIp).digest('hex')
  const key = `chat:daily:${now.toISOString().slice(0, 10)}:${ipHash}`
  const response = await fetch(redisUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${redisToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(['EVAL', INCREMENT_AND_SET_EXPIRY, '1', key, String(ttlSeconds)])
  })

  if (!response.ok) {
    throw new Error(`Chat rate-limit store returned status ${response.status}.`)
  }

  const payload: unknown = await response.json()
  if (!isRecord(payload) || typeof payload.result !== 'number' || !Number.isInteger(payload.result)) {
    throw new Error('Chat rate-limit store returned an invalid response.')
  }

  return {
    allowed: payload.result <= DAILY_LIMIT,
    remaining: Math.max(0, DAILY_LIMIT - payload.result),
    resetAt
  }
}
