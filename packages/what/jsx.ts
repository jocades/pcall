type Tag = keyof HTMLElementTagNameMap | 'text' | 'fragment'

type PropsIn = Record<string, any> & { children?: any[] }

const EVENT_LISTENERS = ['onClick', 'onInput', 'onSubmit']

export function h(
  tag: Tag | ((props: PropsIn) => VNode),
  props: PropsIn,
  key?: string,
) {
  return new VNode(tag, props, key)
}

export class VNode {
  tag: Tag | ((props: PropsIn) => VNode)
  key?: string
  props: Record<string, any>
  children: VNode[]
  listeners: Map<string, EventListener> = new Map()

  constructor(
    tag: Tag | ((props: PropsIn) => VNode),
    props: PropsIn,
    key?: string,
  ) {
    this.tag = tag
    this.key = key

    const children: VNode[] = []

    for (const child of Array.isArray(props.children)
      ? props.children
      : [props.children]) {
      if (child === null || child === undefined) {
        continue
      }

      if (typeof child === 'string' || typeof child === 'number') {
        children.push(new VNode('text', { value: child }))
        /* } else if (isRef(child)) {
        children.push(new VNode('text', { value: unref(child) })) */
      } else {
        children.push(child)
      }
    }

    this.children = children
    delete props.children

    for (const prop in props) {
      if (prop.startsWith('on') && EVENT_LISTENERS.includes(prop)) {
        this.listeners.set(prop.slice(2).toLowerCase(), props[prop])
        delete props[prop]
      }
    }

    this.props = props
  }
}

// render to string
export function render(node: VNode): string {
  console.log(node.tag, node.props, node.children)
  if (typeof node.tag === 'function') {
    return render(node.tag(node.props))
  }

  if (node.tag === 'text') {
    return node.props.value
  }

  const attrs = Object.entries(node.props)
    .map(([key, value]) => {
      if (key === 'className') {
        key = 'class'
      }
      return ` ${key}="${value}"`
    })
    .join('')

  const children = node.children.map((child) => render(child)).join('')

  return `<${node.tag}${attrs}>${children}</${node.tag}>`
}

// render to dom
export function mount(node: VNode, container: HTMLElement) {
  if (typeof node.tag === 'function') {
    container.innerHTML = ''
    mount(node.tag(node.props), container)
    return
  }

  if (node.tag === 'text') {
    const $text = document.createTextNode(node.props.value)
    container.appendChild($text)
    $text.nodeValue = node.props.value
    return
  }

  const $el = document.createElement(node.tag)

  Object.entries(node.props).forEach(([key, value]) => {
    if (key === 'className') {
      key = 'class'
    }
    $el.setAttribute(key, value)
  })

  node.listeners.forEach((callback, event) => {
    $el.addEventListener(event, callback)
  })

  node.children.forEach((child) => mount(child, $el))

  container.appendChild($el)
}
