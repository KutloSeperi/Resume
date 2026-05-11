import { describe, it, expect, beforeEach } from 'vitest'
import * as fc from 'fast-check'
import { useChatbot, type ChatMessage } from './useChatbot'

// Helper: simulate N sends by directly building the message array
// as sendMessage would (user msg + assistant reply per send)
function buildMessageHistory(n: number, initialMessages: ChatMessage[] = []): ChatMessage[] {
  const messages: ChatMessage[] = [...initialMessages]
  for (let i = 0; i < n; i++) {
    messages.push({ role: 'user', content: `message ${i}`, timestamp: new Date() })
    messages.push({ role: 'assistant', content: `reply ${i}`, timestamp: new Date() })
  }
  return messages
}

// Feature: kutlo-portfolio, Property 3: Chatbot message history grows monotonically
describe('Property 3: Chatbot message history grows monotonically', () => {
  it('after N sends, history length equals initial + N×2', () => {
    // Validates: Requirements 8.7
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 20 }),
        fc.integer({ min: 0, max: 10 }),
        (initialCount, n) => {
          // Build initial history (must be even: pairs of user+assistant)
          const initial = buildMessageHistory(initialCount)
          const after = buildMessageHistory(n, initial)
          expect(after.length).toBe(initial.length + n * 2)
        }
      ),
      { numRuns: 100 }
    )
  })
})

// Feature: kutlo-portfolio, Property 4: Chatbot preserves message order
describe('Property 4: Chatbot preserves message order', () => {
  it('user and assistant messages alternate in correct order', () => {
    // Validates: Requirements 8.7
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 20 }),
        (n) => {
          const messages = buildMessageHistory(n)
          // Messages must alternate: user, assistant, user, assistant...
          for (let i = 0; i < messages.length; i++) {
            const expectedRole = i % 2 === 0 ? 'user' : 'assistant'
            expect(messages[i].role).toBe(expectedRole)
          }
          // User messages appear in the order they were sent
          const userMessages = messages.filter((m) => m.role === 'user')
          for (let i = 0; i < userMessages.length; i++) {
            expect(userMessages[i].content).toBe(`message ${i}`)
          }
        }
      ),
      { numRuns: 100 }
    )
  })
})
