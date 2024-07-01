var __legacyDecorateClassTS = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1;i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// web/web-components/web-component.ts
function customElement(tagName) {
  return (target) => {
    registry.push([tagName, target]);
  };
}
function init() {
  for (let [tagName, CustomElement] of registry) {
    customElements.define(tagName, CustomElement);
  }
}
var prop = function(target, key) {
  let _val = target[key];
  defineProperty(target, key, {
    get() {
      return _val;
    },
    set(newValue) {
      _val = newValue;
    }
  });
};
var query = function(selector) {
  return (target, key) => {
    defineProperty(target, key, {
      get() {
        return this.shadowRoot.querySelector(selector);
      }
    });
  };
};
var registry = [];
var { defineProperty } = Object;

class WC extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    console.log("connected");
    const myAttr = this.getAttribute("my-attr");
    this.myAttr = myAttr;
    this.render();
  }
  myAttr;
  render() {
    console.log("render");
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <button>${this.count}</button>
    `;
    this.$btn.addEventListener("click", () => {
      console.log("clicked");
      this.count++;
      this.render();
    });
  }
  styles = `
    button {
      background-color: lightblue;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `;
  disconnectedCallback() {
    console.log("disconnected");
  }
  adoptedCallback() {
    console.log("adopted");
  }
}
__legacyDecorateClassTS([
  prop
], WC.prototype, "count", undefined);
__legacyDecorateClassTS([
  query("button")
], WC.prototype, "$btn", undefined);
WC = __legacyDecorateClassTS([
  customElement("my-element")
], WC);

// web/chessboard/consts.ts
var COLUMNS = "abcdefgh".split("");

// web/web-components/dom.ts
function h(tag, attrs, children) {
  const el = document.createElement(tag);
  if (attrs)
    Object.assign(el, attrs);
  if (children)
    el.append(...children);
  return el;
}

// web/web-components/chess-board.ts
var clone = function(obj) {
  return { ...obj };
};
var css = function(el, styles) {
  Object.assign(el.style, styles);
};
var pieceImg = {
  wr: "\u2656",
  wn: "\u2658",
  wb: "\u2657",
  wq: "\u2655",
  wk: "\u2654",
  wp: "\u2659",
  br: "\u265C",
  bn: "\u265E",
  bb: "\u265D",
  bq: "\u265B",
  bk: "\u265A",
  bp: "\u265F"
};
var initPosition = {
  a1: "wr",
  b1: "wn",
  c1: "wb",
  d1: "wq",
  e1: "wk",
  f1: "wb",
  g1: "wn",
  h1: "wr",
  a2: "wp",
  b2: "wp",
  c2: "wp",
  d2: "wp",
  e2: "wp",
  f2: "wp",
  g2: "wp",
  h2: "wp",
  a7: "bp",
  b7: "bp",
  c7: "bp",
  d7: "bp",
  e7: "bp",
  f7: "bp",
  g7: "bp",
  h7: "bp",
  a8: "br",
  b8: "bn",
  c8: "bb",
  d8: "bq",
  e8: "bk",
  f8: "bb",
  g8: "bn",
  h8: "br"
};
var squareColor = ["#edd7a4", "#b58863"];
var BOARD_SIZE = 512;
var SQUARE_SIZE = BOARD_SIZE / 8;

class HTMLChessboardElement extends HTMLElement {
  _boardSize = 512;
  _squareSize = this._boardSize / 8;
  _position = clone(initPosition);
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
  `;
  $container;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    const $style = h("style", { textContent: HTMLChessboardElement.styles });
    this.$container = h("div", { className: "container" });
    this.shadowRoot?.append($style, this.$container);
    for (let r = 0;r < 8; r++) {
      const $row = h("div", { className: "row" });
      for (let c = 0;c < 8; c++) {
        const square = COLUMNS[c] + (8 - r);
        const $square = h("div", {
          className: "square",
          ondragover: (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
          },
          ondrop: (e) => {
            e.preventDefault();
            const $target = e.target.closest("[data-square]");
            const [from, piece2] = e.dataTransfer.getData("text/plain").split(":");
            const to = $target.dataset.square;
            console.log({ from, to, piece: piece2 });
            if (!to || from === to)
              return;
            this._position[to] = piece2;
            delete this._position[from];
            const $piece = this.$container.querySelector("[dragging]");
            $target.innerHTML = "";
            $target.appendChild($piece);
            $piece.removeAttribute("dragging");
          }
        });
        $square.dataset.square = square;
        css($square, {
          width: `${this._squareSize}px`,
          height: `${this._squareSize}px`,
          backgroundColor: (r + c) % 2 === 0 ? squareColor[0] : squareColor[1]
        });
        const piece = this.getPiece(square);
        if (piece) {
          const $piece = h("div", {
            draggable: true,
            className: "piece",
            textContent: pieceImg[piece],
            ondragstart: (e) => {
              $piece.setAttribute("dragging", "");
              e.dataTransfer.setData("text/plain", `${square}:${piece}`);
            },
            ondragend: (e) => {
              const success = e.dataTransfer.dropEffect === "move";
              console.log("drag end", success);
            }
          });
          $piece.dataset.piece = piece;
          css($piece, {
            fontSize: `${this._squareSize}px`,
            color: piece[0] === "w" ? "white" : "black"
          });
          $square.appendChild($piece);
        }
        const $notation = h("div", {
          className: "notation",
          textContent: square
        });
        css($notation, {
          color: (r + c) % 2 === 0 ? squareColor[1] : squareColor[0],
          userSelect: "none"
        });
        $square.appendChild($notation);
        $row.appendChild($square);
      }
      this.$container.appendChild($row);
    }
  }
  getPiece(square) {
    return this._position[square];
  }
  makeMove(from, to) {
    this._position[to] = this._position[from];
    delete this._position[from];
  }
  connectedCallback() {
    console.log("connected");
    const orientation = this.getAttribute("orientation");
    console.log({ orientation });
  }
  disconnectedCallback() {
    console.log("disconnected");
  }
  adoptedCallback() {
    console.log("adopted");
  }
}

// web/web-components/index.ts
customElements.define("chess-board", HTMLChessboardElement);
init();
