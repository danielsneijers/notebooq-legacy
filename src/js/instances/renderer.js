import Marked from 'marked'

export function enhanceListItemToCheckbox (text) {
  if (/^\s*\[[x ]\]\s*/.test(text)) {
    const enhandedText = text
      .replace(/^\s*\[ \]\s*/, '<input type="checkbox"> ')
      .replace(/^\s*\[x\]\s*/, '<input type="checkbox" checked> ')

    return `<li style="list-style: none">${enhandedText}</li>`
  }

  return `<li>${text}</li>`
}

export const renderer = new Marked.Renderer()
renderer.listitem = (text) => enhanceListItemToCheckbox(text)

export default Marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})
