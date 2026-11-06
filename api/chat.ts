import type { VercelRequest, VercelResponse } from '@vercel/node'
import { checkDailyChatLimit, getClientIp } from './chat-rate-limit'
import {
  isAffirmativeReply,
  isAssistantFeedback,
  isAssistantQuestion,
  isExperienceDurationQuestion,
  isKutloDetailQuestion,
  isSmallTalk,
  isThankYou,
  retrieveKnowledge
} from './chat-knowledge'

type ChatRole = 'user' | 'assistant'

interface ChatMessage {
  role: ChatRole
  content: string
}

function isChatMessage(value: unknown): value is ChatMessage {
  if (typeof value !== 'object' || value === null || !('role' in value) || !('content' in value)) {
    return false
  }

  return (
    (value.role === 'user' || value.role === 'assistant') &&
    typeof value.content === 'string' &&
    value.content.length > 0 &&
    value.content.length <= 8000
  )
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const body: unknown = req.body
  if (
    !isRecord(body) ||
    !Array.isArray(body.messages) ||
    body.messages.length === 0 ||
    body.messages.length > 40 ||
    !body.messages.every(isChatMessage) ||
    body.messages[body.messages.length - 1]?.role !== 'user'
  ) {
    return res.status(400).json({ error: 'Invalid chat messages.' })
  }

  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    console.error('OPENROUTER_API_KEY is not configured.')
    return res.status(503).json({ error: 'Chatbot is not configured.' })
  }

  const clientIp = getClientIp(req.headers)
  if (!clientIp) {
    console.error('Could not identify the client IP for chat rate limiting.')
    return res.status(503).json({ error: 'Chat is temporarily unavailable. Please try again later.' })
  }

  let rateLimit
  try {
    rateLimit = await checkDailyChatLimit(clientIp)
  } catch (error) {
    console.error('Chat rate limit check failed:', error)
    return res.status(503).json({ error: 'Chat is temporarily unavailable. Please try again later.' })
  }

  if (!rateLimit.allowed) {
    return res.status(429).json({
      error: "You've reached today's chat limit. Please come back tomorrow or contact Kutlo directly at kutlocoopseperi@gmail.com or 062 785 7296.",
      resetAt: rateLimit.resetAt
    })
  }

  const latestQuestion = body.messages[body.messages.length - 1].content

  if (isThankYou(latestQuestion)) {
    return res.status(200).json({ reply: "You're welcome! Happy to help." })
  }

  if (isAssistantQuestion(latestQuestion)) {
    return res.status(200).json({
      reply: "Yes—in a way. I'm guided by instructions and Kutlo's portfolio information, which help me stay focused and avoid guessing. Think of it as a helpful AI with guardrails, not a robot in a harness."
    })
  }

  if (isAssistantFeedback(latestQuestion)) {
    return res.status(200).json({
      reply: "You're right—I missed the connection earlier. I should answer questions about Kutlo from the conversation and save the playful redirect for genuinely unrelated topics."
    })
  }

  const previousMessages = body.messages.slice(0, -1)
  const lastMessage = previousMessages[previousMessages.length - 1]
  const answeringBotQuestion =
    lastMessage?.role === 'assistant' &&
    lastMessage.content.includes('?') &&
    isAffirmativeReply(latestQuestion)
  const previousQuestions = previousMessages
    .filter((message) => message.role === 'user')
    .slice(-3)
    .map((message) => message.content)
  const currentKnowledge = retrieveKnowledge(latestQuestion)
  const relevantKnowledge = currentKnowledge.length > 0
    ? currentKnowledge
    : answeringBotQuestion
      ? retrieveKnowledge(previousQuestions.join(' '))
      : []

  if (isExperienceDurationQuestion(latestQuestion)) {
    return res.status(200).json({
      reply: 'Kutlo worked as a Front-End Developer at TechPrime from February to July 2024 and has been a Full Stack Developer at Two Men And A Truck and Ox Box since April 2025. I don’t have an exact total for his years of experience, so I’d rather not guess.'
    })
  }

  if (relevantKnowledge.length === 0 && isKutloDetailQuestion(latestQuestion)) {
    return res.status(200).json({
      reply: "I'm not sure about that one, so I don't want to guess. For more details, you can contact Kutlo directly at kutlocoopseperi@gmail.com or 062 785 7296."
    })
  }

  if (relevantKnowledge.length === 0 && !isSmallTalk(latestQuestion) && !answeringBotQuestion) {
    return res.status(200).json({
      reply: "I'm best at questions about Kutlo—his work, skills, projects, and services. What would you like to know?"
    })
  }

  const systemPrompt = `You are DevBot, a friendly assistant for Kutlo Seperi's portfolio.
Answer using only the verified information below. Do not invent, assume, or add facts from general knowledge. Do not guess Kutlo's age, seniority, or total years of experience from his job titles or dates.
When you are unsure about a detail, say so naturally and offer Kutlo's contact information rather than mentioning a portfolio or knowledge base.
Use all relevant work-history details provided below when asked about roles or experience.
Keep the tone warm, light, and occasionally humorous when it feels natural. Keep jokes brief and never let them obscure the answer.
Write with correct spelling, grammar, and punctuation. Use clear, short paragraphs. Use Markdown headings and bullets for grouped information, with a blank line between sections. For questions about skills or experience, do not just repeat a raw list: begin with a sentence explaining how the information fits together, then briefly connect it to relevant examples in the portfolio. Keep this explanation grounded in the verified context; do not claim expertise or results that are not stated. Keep replies concise and natural. Only share pricing or contact details when asked.
Reply naturally to greetings and casual small talk. If someone asks how you are, respond briefly and ask how you can help. Don't use the off-topic redirect for small talk.
If the visitor answers yes or sure to a question you just asked, continue that conversation instead of using the off-topic redirect.
If asked where you are from, say you are DevBot, a virtual portfolio assistant, and clarify that Kutlo is based in Cape Town, South Africa.
If a question is unrelated to Kutlo, politely and lightly steer the conversation back to him.

Verified portfolio context:
${relevantKnowledge.map((document) => `${document.title}: ${document.content}`).join('\n') || 'No matching portfolio facts.'}`

  try {
    const upstreamResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'X-Title': "Kutlo Seperi's Portfolio"
      },
      body: JSON.stringify({
        model: 'openrouter/free',
        messages: [
          { role: 'system', content: systemPrompt },
          ...body.messages
        ]
      })
    })

    if (!upstreamResponse.ok) {
      console.error(`OpenRouter request failed with status ${upstreamResponse.status}.`)
      return res.status(502).json({ error: 'Chatbot provider request failed.' })
    }

    const data: unknown = await upstreamResponse.json()
    if (
      !isRecord(data) ||
      !Array.isArray(data.choices) ||
      !isRecord(data.choices[0]) ||
      !isRecord(data.choices[0].message) ||
      typeof data.choices[0].message.content !== 'string'
    ) {
      console.error('OpenRouter returned an invalid chat response.')
      return res.status(502).json({ error: 'Chatbot provider returned an invalid response.' })
    }

    return res.status(200).json({ reply: data.choices[0].message.content })
  } catch (error) {
    console.error('Chatbot proxy request failed:', error)
    return res.status(502).json({ error: 'Unable to reach the chatbot provider.' })
  }
}
