import { marked } from 'marked'
import markdown from '../content/resume.md?raw'
import './style.css'

marked.setOptions({
  gfm: true,
  breaks: false,
})

const root = document.querySelector('#resume')
if (root) {
  root.innerHTML = marked.parse(markdown)

  root.querySelectorAll('h3').forEach((heading) => {
    const badge = heading.querySelector(':scope > code:last-child')
    if (!badge || heading.childNodes.length < 2) return

    const text = document.createElement('span')
    text.className = 'resume-heading__text'
    while (heading.firstChild && heading.firstChild !== badge) {
      text.appendChild(heading.firstChild)
    }
    heading.insertBefore(text, badge)
  })

  root.querySelectorAll('a[href^="http"]').forEach((link) => {
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
  })
}

document.querySelector('[data-print]')?.addEventListener('click', (event) => {
  event.preventDefault()
  window.print()
})
