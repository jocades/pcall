import { COLUMNS } from '../chessboard/consts'
import { h } from './dom'

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

// prettier-ignore
const pieceImg: Record<string, string> = {
  wr: '♖', wn: '♘', wb: '♗', wq: '♕', wk: '♔', wp: '♙',
  br: '♜', bn: '♞', bb: '♝', bq: '♛', bk: '♚', bp: '♟',
}

// prettier-ignore
const initPosition: Record<string, string> = {
  a1: 'wr', b1: 'wn', c1: 'wb', d1: 'wq', e1: 'wk', f1: 'wb', g1: 'wn', h1: 'wr',
  a2: 'wp', b2: 'wp', c2: 'wp', d2: 'wp', e2: 'wp', f2: 'wp', g2: 'wp', h2: 'wp',
  a7: 'bp', b7: 'bp', c7: 'bp', d7: 'bp', e7: 'bp', f7: 'bp', g7: 'bp', h7: 'bp',
  a8: 'br', b8: 'bn', c8: 'bb', d8: 'bq', e8: 'bk', f8: 'bb', g8: 'bn', h8: 'br',
}

function clone<T extends Record<string, unknown>>(obj: T) {
  return { ...obj }
}

function css(el: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
  Object.assign(el.style, styles)
}

const squareColor = ['#edd7a4', '#b58863'] as const

const BOARD_SIZE = 512
const SQUARE_SIZE = BOARD_SIZE / 8

export class HTMLChessboardElement extends HTMLElement {
  private _boardSize = 512
  private _squareSize = this._boardSize / 8

  private _position: Record<string, string> = clone(initPosition)

  static styles = `
    .container {
      display: flex;
      flex-direction: column;
      min-height: ${BOARD_SIZE}px;
      min-width: ${BOARD_SIZE}px;
      perspective: 1000px;
    }
    .row {
      display: flex;
    }
    .square {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      /* border: 1px solid black; */
    }
    .piece {
      cursor: grab;
    }
    .notation {
      position: absolute;
      left: 1px;
      top: 1px;
      font-size: 12px;
    }
  `

  private $container!: HTMLDivElement

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  private render() {
    const $style = h('style', { textContent: HTMLChessboardElement.styles })
    this.$container = h('div', { className: 'container' })

    this.shadowRoot?.append($style, this.$container)

    for (let r = 0; r < 8; r++) {
      const $row = h('div', { className: 'row' })

      for (let c = 0; c < 8; c++) {
        const square = COLUMNS[c] + (8 - r)

        const $square = h('div', {
          className: 'square',
          ondragover: (e) => {
            e.preventDefault()
            e.dataTransfer!.dropEffect = 'move'
          },
          ondrop: (e) => {
            e.preventDefault()
            const $target = (e.target as HTMLElement).closest(
              '[data-square]',
            )! as HTMLDivElement

            const [from, piece] = e
              .dataTransfer!.getData('text/plain')
              .split(':')

            const to = $target.dataset.square

            console.log({ from, to, piece })

            if (!to || from === to) return

            // move piece
            this._position[to] = piece
            delete this._position[from]

            const $piece = this.$container.querySelector('[dragging]')!

            $target.innerHTML = ''
            $target.appendChild($piece)
            $piece.removeAttribute('dragging')
          },
        })
        $square.dataset.square = square
        css($square, {
          width: `${this._squareSize}px`,
          height: `${this._squareSize}px`,
          backgroundColor: (r + c) % 2 === 0 ? squareColor[0] : squareColor[1],
        })

        const piece = this.getPiece(square)
        if (piece) {
          const $piece = h('div', {
            draggable: true,
            className: 'piece',
            textContent: pieceImg[piece],
            ondragstart: (e) => {
              $piece.setAttribute('dragging', '')
              e.dataTransfer!.setData('text/plain', `${square}:${piece}`)
            },
            ondragend: (e) => {
              const success = e.dataTransfer!.dropEffect === 'move'
              console.log('drag end', success)
            },
          })
          $piece.dataset.piece = piece
          css($piece, {
            fontSize: `${this._squareSize}px`,
            color: piece[0] === 'w' ? 'white' : 'black',
          })

          $square.appendChild($piece)
        }

        const $notation = h('div', {
          className: 'notation',
          textContent: square,
        })

        css($notation, {
          color: (r + c) % 2 === 0 ? squareColor[1] : squareColor[0],
          userSelect: 'none',
        })

        $square.appendChild($notation)
        $row.appendChild($square)
      }

      this.$container.appendChild($row)
    }
  }

  getPiece(square: string): string | undefined {
    return this._position[square]
  }

  makeMove(from: string, to: string) {
    this._position[to] = this._position[from]
    delete this._position[from]
  }

  // lifecycle methods

  // called when the element is added to the DOM
  connectedCallback() {
    console.log('connected')
    const orientation = this.getAttribute('orientation')
    console.log({ orientation })
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
  /* attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log('attribute changed', { name, oldValue, newValue })
  }

  // observe attributes
  static get observedAttributes() {
    return ['orientation']
  } */
}
