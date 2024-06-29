import { client } from '@/client'
import { useState, useEffect, useRef } from 'react'
import { type AppRouter } from '../server/serve'
import { Chess, type Move, type Piece, type Square } from 'chess.js'

const api = client<AppRouter>('http://localhost:8000/rpc')

const ws = api.$ws()

const chess = new Chess()

export default function App() {
  const [connected, setConnected] = useState(false)
  const [searching, setSearching] = useState(false)

  const [id, setId] = useState<number | null>(null)
  const [color, setColor] = useState<'white' | 'black'>('black')
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
  }, [])

  if (!connected)
    return (
      <main className="flex h-screen items-center justify-center">
        <h1>Connecting...</h1>
      </main>
    )

  function getBoard() {
    const board = chess.board().flat()
    return color === 'white' ? board : board.reverse()
  }

  function onTurn() {
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

  function getSquare(i: number) {
    const j = color === 'white' ? i : 63 - i
    return {
      square: (String.fromCharCode(97 + (j % 8)) +
        (8 - Math.floor(j / 8))) as Square,
      squareColor: j % 2 === Math.floor(j / 8) % 2 ? 'white' : 'black',
    }
  }

  function onSquareClick(square: Square, piece: Piece | null) {
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
      console.log('Selected piece:', piece)
    }
  }

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
      <div className="flex flex-wrap size-[512px]">
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
      </div>
      {/* color */}
      <h3 className="text-2xl">{color}</h3>
      {/* id */}
      <h3 className="text-2xl">{id}</h3>
    </main>
  )
}
