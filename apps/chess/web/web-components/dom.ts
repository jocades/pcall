export function h<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs?: Partial<HTMLElementTagNameMap[K]>,
  children?: HTMLElement[],
) {
  const el = document.createElement(tag)
  if (attrs) Object.assign(el, attrs)
  if (children) el.append(...children)
  return el
}
