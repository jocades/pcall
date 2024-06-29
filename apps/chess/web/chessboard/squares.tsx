import type { Piece, Square as Sq } from 'chess.js'

const COLUMNS = 'abcdefgh'.split('')

interface SquareProps {
  square: Sq
  squareColor: string
  piece: Piece | null
  onSquareClick?: (square: Sq, piece: Piece | null) => void
  children?: React.ReactNode
}

function Square({
  square,
  squareColor,
  piece,
  onSquareClick,
  children,
}: SquareProps) {
  return (
    <div
      className="relative flex items-center justify-center size-[64px] border border-black"
      style={{ backgroundColor: squareColor }}
      onClick={() => onSquareClick?.(square, piece)}
    >
      {children}
    </div>
  )
}

interface SquaresProps {
  board: (Piece | null)[][]
  orientation: 'white' | 'black'
}

export function Squares({ board, orientation }: SquaresProps) {
  // use a container to hold the squares and to be able to resize with ease
  return (
    <div className="flex flex-col w-full h-full">
      {board.map((row, r) => (
        <div key={r} className="flex">
          {row.map((piece, c) => {
            const square =
              orientation === 'white'
                ? COLUMNS[c] + (8 - r)
                : COLUMNS[7 - c] + (r + 1)
            const squareColor = (r + c) % 2 === 0 ? 'white' : 'black'

            console.log({ row: r, col: c, square, squareColor })

            return (
              /* square */
              <Square
                key={c}
                square={square as Sq}
                squareColor={squareColor}
                piece={piece}
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
                    {orientation === 'white' ? 8 - r : r + 1}
                  </div>
                )}
                {r === 7 && (
                  <div
                    className="absolute right-1 bottom-1 text-xs"
                    style={{
                      color: squareColor === 'white' ? 'black' : 'white',
                    }}
                  >
                    {orientation === 'white' ? COLUMNS[c] : COLUMNS[7 - c]}
                  </div>
                )}
              </Square>
            )
          })}
        </div>
      ))}
    </div>
  )
}
