// experimenting with web components

function css(el: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
  Object.assign(el.style, styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'chess-board': HTMLChessboardElement
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chess-board': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLChessboardElement>,
        HTMLChessboardElement
      >
    }
  }
}

const COLUMNS = 'abcdefgh'.split('')

export class HTMLChessboardElement extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })

    shadow.innerHTML = `
      <style>
        .container {
          display: flex;
          flex-direction: column;
          min-height: 512px;
          min-width: 512px;
        }
        .row {
          display: flex;
        }
        .square {
          width: 64px;
          height: 64px;
          display: flex;
          position: relative;
          align-items: center;
          justify-content: center;
          border: 1px solid black;
        }
        .notation {
          position: absolute;
          left: 1px;
          top: 1px;
          font-size: 12px;
        }
      </style>
      <div class="container"></div>
    `
    const $container = shadow.querySelector<HTMLDivElement>('.container')!

    for (let r = 0; r < 8; r++) {
      const $row = document.createElement('div')
      $row.className = 'row'

      for (let c = 0; c < 8; c++) {
        const square = COLUMNS[c] + (8 - r)

        const $square = document.createElement('div')
        $square.className = 'square'
        $square.style.backgroundColor = (r + c) % 2 === 0 ? 'white' : 'black'
        $square.dataset.square = square

        const $notation = document.createElement('div')
        $notation.textContent = square
        $notation.className = 'notation'
        $notation.style.color =
          $square.style.backgroundColor === 'white' ? 'black' : 'white'

        $square.appendChild($notation)

        $row.appendChild($square)
      }

      $container.appendChild($row)
    }
  }

  // add custom 'react-prop'
  static sayHello() {
    console.log('Hello from Chessboard!')
  }

  // lifecycle methods

  // called when the element is added to the DOM
  connectedCallback() {
    console.log('connected')
  }

  // called when the element is removed from the DOM
  disconnectedCallback() {
    console.log('disconnected')
  }

  // called when the element is moved to a new document
  adoptedCallback() {
    console.log('adopted')
  }

  // called when an attribute is added, removed, or updated
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log('attribute changed', { name, oldValue, newValue })
  }

  // observe attributes
  static get observedAttributes() {
    return ['color']
  }

  // getters and setters
  get color() {
    return this.getAttribute('color')!
  }

  set color(value: string) {
    this.setAttribute('color', value)
  }

  // methods
  movePiece(from: string, to: string) {
    console.log('move piece', { from, to })
  }
}

// define the custom element
customElements.define('chess-board', HTMLChessboardElement)

// create an instance and add it to the document
/* const $chessboard = document.createElement('chess-board')
document.body.appendChild($chessboard)

console.log($chessboard.getBoundingClientRect()) */
