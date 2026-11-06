import { ref } from 'vue'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const FALLBACK_MESSAGE =
  "Sorry, I'm having trouble connecting right now. Please reach out to Kutlo directly at kutlocoopseperi@gmail.com or 062 785 7296."

const messages = ref<ChatMessage[]>([])
const isLoading = ref(false)

async function sendMessage(text: string): Promise<void> {
  const userMessage: ChatMessage = {
    role: 'user',
    content: text,
    timestamp: new Date()
  }
  messages.value.push(userMessage)
  isLoading.value = true

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: [
          ...messages.value.slice(0, -1).map((message) => ({
            role: message.role,
            content: message.content
          })),
          { role: 'user', content: text }
        ]
      })
    })

    if (!response.ok) {
      const data: unknown = await response.json()
      if (
        typeof data === 'object' &&
        data !== null &&
        'error' in data &&
        typeof data.error === 'string'
      ) {
        messages.value.push({
          role: 'assistant',
          content: data.error,
          timestamp: new Date()
        })
        return
      }

      throw new Error(`Chatbot API error: ${response.status}`)
    }

    const data = await response.json()
    const replyText = data.reply

    messages.value.push({
      role: 'assistant',
      content: typeof replyText === 'string' ? replyText : FALLBACK_MESSAGE,
      timestamp: new Date()
    })
  } catch (error) {
    console.error('Chatbot request failed:', error)
    messages.value.push({
      role: 'assistant',
      content: FALLBACK_MESSAGE,
      timestamp: new Date()
    })
  } finally {
    isLoading.value = false
  }
}

function clearMessages(): void {
  messages.value = []
}

export function useChatbot() {
  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages
  }
}