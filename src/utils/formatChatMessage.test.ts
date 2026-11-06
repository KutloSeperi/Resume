import { describe, expect, it } from 'vitest'
import { formatChatMessage } from './formatChatMessage'

describe('formatChatMessage', () => {
  it('formats paragraphs, headings, bold text, and lists', () => {
    const formatted = formatChatMessage(
      'Here is the context.\n\n## Front end\n- **Vue.js**\n- TypeScript'
    )

    expect(formatted).toBe(
      '<p>Here is the context.</p><h4>Front end</h4><ul><li><strong>Vue.js</strong></li><li>TypeScript</li></ul>'
    )
  })

  it('escapes HTML in chatbot content', () => {
    expect(formatChatMessage('<script>alert("x")</script>')).toBe(
      '<p>&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;</p>'
    )
  })
})
