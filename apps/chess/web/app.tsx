import { client } from '@/client'
import { useState, useEffect, useRef } from 'react'
import { type AppRouter } from '../server/serve'
import { Chess, type Move, type Piece, type Square } from 'chess.js'

const api = client<AppRouter>('http://localhost:8000/rpc')

const ws = api.$ws()

const chess = new Chess()

/* console.log(chess.board())
console.log(chess.board().toReversed())

chess.move('e4')

console.log(chess.board())
console.log(chess.board().toReversed()) */

const COLUMNS = 'abcdefgh'.split('')

export default function App() {
  const [connected, setConnected] = useState(false)
  const [searching, setSearching] = useState(false)

  const [id, setId] = useState<number | null>(null)
  const [color, setColor] = useState<'white' | 'black'>('white')
  const [board, setBoard] = useState(() => getBoard())

  const from = useRef<Square | null>(null)

  useEffect(() => {
    ws.on('connect', () => setConnected(true))
    ws.on('disconnect', () => setConnected(false))

    ws.on('init', ({ id, color }) => {
      setSearching(false)
      setId(id)
      setColor(color)
      console.log('Game started with id:', id)
    })

    ws.on('move', (move) => {
      console.log('Received move:', move)
      chess.move(move)
      onTurn()
    })
  }, [])

  function getBoard() {
    const board = chess.board()
    return color === 'white'
      ? board
      : board.map((row) => row.toReversed()).toReversed()
  }

  useEffect(() => {
    setBoard(getBoard())
  }, [color])

  function onTurn() {
    console.log('Turn:', chess.turn(), chess.board())
    setBoard(getBoard())
  }

  function makeMove(from: Square, to: Square) {
    let move: Move
    try {
      move = chess.move({ from, to, promotion: 'q' })
    } catch (err) {
      console.log(err)
      return
    }

    console.log('Move:', move)
    ws.emit('move', { id, move })

    onTurn()
  }

  function onSquareClick(square: Square, piece: Piece | null) {
    console.log('Square:', square, 'Piece:', piece)

    if (from.current === square) return

    const turn = chess.turn() // 'w' | 'b'

    // move the piece
    if (from.current && piece?.color !== turn) {
      makeMove(from.current, square)
      from.current = null
      return
    }

    // select the piece
    if (piece && piece.color === turn) {
      from.current = square
    }
  }

  if (!connected)
    return (
      <main className="flex h-screen items-center justify-center">
        <h1>Connecting...</h1>
      </main>
    )

  return (
    <main className="relative flex flex-col h-screen items-center justify-center">
      <button
        className="btn"
        onClick={() => {
          if (searching) return
          setSearching(true)
          ws.emit('search')
        }}
      >
        {searching ? 'Searching...' : 'Search for game'}
      </button>
      <button
        className="btn"
        onClick={() => setColor(color === 'white' ? 'black' : 'white')}
      >
        Color
      </button>
      {board.map((row, r) => (
        <div key={r} className="flex">
          {row.map((piece, c) => {
            const square =
              color === 'white'
                ? COLUMNS[c] + (8 - r)
                : COLUMNS[7 - c] + (r + 1)
            const squareColor = (r + c) % 2 === 0 ? 'white' : 'black'

            // console.log({ row: r, col: c, square, squareColor })

            return (
              /* square */
              <div
                key={c}
                className="relative flex items-center justify-center size-[64px] border border-black"
                style={{ backgroundColor: squareColor }}
                onClick={() => onSquareClick(square as Square, piece)}
              >
                {/* piece */}
                {/* <div className="hover:cursor-pointer">{piece?.type}</div> */}
                {piece && (
                  <img
                    src={`/assets/${piece.color}${piece.type}.png`}
                    alt={piece.type}
                    className="w-8 h-8 hover:cursor-grab"
                  />
                )}
                {/* notation */}
                {c === 0 && (
                  <div
                    className="absolute left-1 top-1 text-xs"
                    style={{
                      color: squareColor === 'white' ? 'black' : 'white',
                    }}
                  >
                    {color === 'white' ? 8 - r : r + 1}
                  </div>
                )}
                {r === 7 && (
                  <div
                    className="absolute right-1 bottom-1 text-xs"
                    style={{
                      color: squareColor === 'white' ? 'black' : 'white',
                    }}
                  >
                    {color === 'white' ? COLUMNS[c] : COLUMNS[7 - c]}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      ))}
      {/* <div className="flex flex-wrap size-[512px]">
        {board.map((piece, i) => {
          const { square, squareColor } = getSquare(i)
          return (
            <div
              key={i}
              className="flex items-center justify-center size-[64px] border border-black"
              style={{ backgroundColor: squareColor }}
              onClick={() => onSquareClick(square, piece)}
            >
              <div className="hover:cursor-pointer">{piece?.type}</div>
            </div>
          )
        })}
      </div> */}
      {/* color */}
      <h3 className="text-2xl">{color}</h3>
      {/* id */}
      <h3 className="text-2xl">{id}</h3>
    </main>
  )
}
