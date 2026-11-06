function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatInline(value: string): string {
  return escapeHtml(value).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

export function formatChatMessage(message: string): string {
  const blocks: string[] = []
  let paragraph: string[] = []
  let list: string[] = []

  function flushParagraph() {
    if (paragraph.length) {
      blocks.push(`<p>${paragraph.map(formatInline).join('<br>')}</p>`)
      paragraph = []
    }
  }

  function flushList() {
    if (list.length) {
      blocks.push(`<ul>${list.map((item) => `<li>${formatInline(item)}</li>`).join('')}</ul>`)
      list = []
    }
  }

  for (const line of message.split(/\r?\n/)) {
    const trimmed = line.trim()
    const heading = trimmed.match(/^#{1,3}\s+(.+)$/)
    const item = trimmed.match(/^[-*]\s+(.+)$/)

    if (!trimmed) {
      flushParagraph()
      flushList()
    } else if (heading) {
      flushParagraph()
      flushList()
      blocks.push(`<h4>${formatInline(heading[1])}</h4>`)
    } else if (item) {
      flushParagraph()
      list.push(item[1])
    } else {
      flushList()
      paragraph.push(trimmed)
    }
  }

  flushParagraph()
  flushList()

  return blocks.join('')
}
