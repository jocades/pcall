import { COLUMNS } from '../chessboard/consts'
import { h } from './dom'

function css(el: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
  Object.assign(el.style, styles)
}

const registry: [string, CustomElementConstructor][] = []

// decorators
export function customElement(tagName: string) {
  return (target: CustomElementConstructor) => {
    registry.push([tagName, target])
  }
}

export function init() {
  for (let [tagName, CustomElement] of registry) {
    customElements.define(tagName, CustomElement)
  }
}

export function hasChanged(val: unknown, oldVal: unknown) {
  return val !== oldVal && (val === val || oldVal === oldVal)
}

function reactive<T extends object>(obj: T, cb: () => void) {
  return new Proxy(obj, {
    set(target, key, val, receiver) {
      const oldVal = Reflect.get(target, key, receiver)
      if (hasChanged(val, oldVal)) {
        cb()
        Reflect.set(target, key, val, receiver)
      }
      return true
    },
  })
}

const { defineProperty } = Object

// decorators
function prop(target: WC, key: string) {
  let _val = target[key as keyof WC]

  defineProperty(target, key, {
    get() {
      return _val
    },
    set(newValue: any) {
      _val = newValue
      // this.render()
    },
  })
}

function query(selector: string) {
  return (target: WC, key: string) => {
    defineProperty(target, key, {
      get() {
        return this.shadowRoot.querySelector(selector)
      },
    })
  }
}

@customElement('my-element')
export class WC extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    console.log('connected')
    const myAttr = this.getAttribute('my-attr')
    this.myAttr = myAttr
    this.render()
  }

  myAttr!: string | null

  @prop count = 0

  @query('button')
  $btn!: HTMLButtonElement

  // render the slot content
  render() {
    console.log('render')
    this.shadowRoot!.innerHTML = `
      <style>${this.styles}</style>
      <button>${this.count}</button>
    `

    this.$btn.addEventListener('click', () => {
      console.log('clicked')
      this.count++
      this.render()
    })
  }

  styles = `
    button {
      background-color: lightblue;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `

  // lifecycle methods

  // called when the element is added to the DOM

  // called when the element is removed from the DOM
  disconnectedCallback() {
    console.log('disconnected')
  }

  // called when the element is moved to a new document
  adoptedCallback() {
    console.log('adopted')
  }
}

// customElements.define('my-element', MyElement)
// create

declare global {
  interface HTMLElementTagNameMap {
    'my-element': WC
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-element': React.DetailedHTMLProps<React.HTMLAttributes<WC>, WC>
    }
  }
}

// create an instance and add it to the document
/* const $chessboard = document.createElement('chess-board')
document.body.appendChild($chessboard)

console.log($chessboard.getBoundingClientRect()) */

// goal:
// convret this:
// <button @click={() => console.log('clicked')}>{text}</button>
// into a template which can be used in the custom element
// templeate that renders:
// <button>text</button>
// and adds an event listener for the click event
// button.addEventListener('click', () => console.log('clicked'))

function htmla(
  strings: TemplateStringsArray,
  ...values: (string | ((...args: any[]) => void))[]
) {
  const template = document.createElement('template')

  let str = ''

  console.log(strings, values)

  for (let i = 0; i < strings.length; i++) {
    str += strings[i]

    if (values[i] === undefined || values[i] === null) {
      continue
    }

    if (typeof values[i] === 'function') {
      const event = strings[i].match(/@(\w+)/)![1]
      // remove the event from the string
      // str = str.replace(`@${event}`, '')
      // str += `data-event="${event}:${i}"`
      str += str.replace(`@${event}=`, `data-event="${event}:${i}"`)
    } else {
      str += values[i]
    }
  }
  console.log(str)

  template.innerHTML = str

  // add event listeners
  template.content.querySelectorAll('[data-event]').forEach((el) => {
    const [event, index] = el.getAttribute('data-event')!.split(':')
    const value = values[parseInt(index)]

    el.addEventListener(event, value as EventListener)
  })

  return template
}

/* const text = 'Click me!'

const template = html`<button @click=${() => console.log('clicked')}>
  ${text}
</button>`

console.log(template.content) */
