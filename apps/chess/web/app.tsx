import { client } from '@/client'
import { useState, useEffect, useRef, useMemo } from 'react'
import { type AppRouter } from '../server/serve'
import { Chess, type Move, type Piece, type Square } from 'chess.js'
import { defaultPieces } from './chessboard/pieces'
import { COLUMNS } from './chessboard/consts'

const api = client<AppRouter>('http://localhost:8000/rpc')

const ws = api.$ws()

const chess = new Chess()

export default function App() {
  const [count, setCount] = useState(0)
  const [connected, setConnected] = useState(false)
  const [searching, setSearching] = useState(false)

  const [id, setId] = useState<number | null>(null)
  const [color, setColor] = useState<'white' | 'black'>('white')
  const [board, setBoard] = useState(() => getBoard())
  const [boardWidth, setBoardWidth] = useState<number>(512)

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
    console.log(square, piece)

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

  return (
    <main className="relative flex flex-col h-screen items-center justify-center">
      {/* <chess-board
        onClick={(e) => {
          console.log
          console.log(e.detail)
          const t = e.target
          console.log(t)
        }}
      ></chess-board> */}
      <my-element my-attr="ok"></my-element>
      <button onClick={() => setCount((prev) => prev + 1)}>
        <span>Count: {count}</span>
      </button>
    </main>
  )

  const containerRef = useRef<HTMLDivElement>(null)

  /* const rect = useMemo(
    () => containerRef.current?.getBoundingClientRect(),
    [containerRef.current],
  ) */

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new ResizeObserver(() => {
      const rect = containerRef.current?.getBoundingClientRect()
      const size = Math.min(rect?.width || 0, rect?.height || 0)

      console.log('Size:', size)
      setBoardWidth(size)
    })

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [containerRef.current])

  if (!connected)
    return (
      <main className="flex h-screen items-center justify-center">
        <h1>Connecting...</h1>
      </main>
    )

  return (
    <main className="relative flex flex-col h-screen items-center justify-center bg-blue-200">
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

      {/* container */}
      <div
        ref={containerRef}
        className="relative"
        style={{ width: undefined, height: undefined }}
      >
        {/* squares */}
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
                  className="relative"
                  style={{
                    width: boardWidth / 8,
                    height: boardWidth / 8,
                    backgroundColor:
                      squareColor === 'white' ? '#edd7a4' : '#b58863',
                  }}
                  onClick={() => onSquareClick(square as Square, piece)}
                >
                  {/* piece */}
                  {piece && (
                    <svg
                      viewBox={'1 1 43 43'}
                      width={boardWidth / 8}
                      height={boardWidth / 8}
                      className="block hover:cursor-grab"
                    >
                      <g>{defaultPieces[`${piece.color}${piece.type}`]}</g>
                    </svg>
                  )}
                  {/* notation */}
                  {c === 0 && (
                    <div
                      className="absolute left-1 top-1 text-xs"
                      style={{
                        color: squareColor === 'white' ? '#b58863' : '#edd7a4',
                      }}
                    >
                      {color === 'white' ? 8 - r : r + 1}
                    </div>
                  )}
                  {r === 7 && (
                    <div
                      className="absolute right-1 bottom-1 text-xs"
                      style={{
                        color: squareColor === 'white' ? '#b58863' : '#edd7a4',
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
      </div>
      {/* color */}
      <h3 className="text-2xl">{color}</h3>
      {/* id */}
      <h3 className="text-2xl">{id}</h3>
    </main>
  )
}
