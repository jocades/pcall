// experimenting with web components

function css(el: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
  Object.assign(el.style, styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'chess-board': HTMLChessboardElement
  }
}

class HTMLChessboardElement extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })

    /* const $container = document.createElement('div')
    css($container, {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '512px',
      minWidth: '512px',
    }) */

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
          align-items: center;
          justify-content: center;
          border: 1px solid black;
        }
        .black {
          background-color: black;
        }
        .white {
          background-color: white;
        }
      </style>
      <div class="container"></div>
    `
    const $container = shadow.querySelector<HTMLDivElement>('.container')!

    for (let r = 0; r < 8; r++) {
      const $row = document.createElement('div')
      $row.className = 'row'

      for (let c = 0; c < 8; c++) {
        const $square = document.createElement('div')
        $square.classList.add('square', (r + c) % 2 === 0 ? 'white' : 'black')
        // css($square, {
        //   width: '64px',
        //   height: '64px',
        //   display: 'flex',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        //   // border: '1px solid black',
        //   backgroundColor: (r + c) % 2 === 0 ? 'white' : 'black',
        // })
        //
        $row.appendChild($square)
      }

      $container.appendChild($row)
    }
  }
}

// define the custom element
customElements.define('chess-board', HTMLChessboardElement)

// create an instance and add it to the document
const $chessboard = document.createElement('chess-board')
document.body.appendChild($chessboard)

console.log($chessboard.getBoundingClientRect())
