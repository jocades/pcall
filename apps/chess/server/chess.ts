import type { Channel, Socket, SocketServer } from '@/ws/server'
import { Chess, type Move } from 'chess.js'

export const enum Events {
  INIT = 'init',
  MOVE = 'move',
  END = 'end',
}

export class Game {
  id: number
  chess: Chess
  w: Socket
  b: Socket
  timestamp: number

  constructor(id: number, white: Socket, black: Socket) {
    this.id = id
    this.chess = new Chess()
    this.timestamp = Date.now()

    this.w = white
    this.b = black
  }

  makeMove(move: { from: string; to: string }) {
    try {
      this.chess.move(move)
    } catch (err) {
      console.error(err)
      return
    }

    const color = this.chess.turn() === 'w' ? 'white' : 'black'

    if (this.chess.isGameOver()) {
      this.send(Events.END, { winner: color })
      return
    }

    this[this.chess.turn()].emit(Events.MOVE, move)
  }

  send(event: string, data?: unknown) {
    this.w.emit(event, data)
    this.b.emit(event, data)
  }

  [Symbol.toPrimitive]() {
    return this.id
  }
}

export class GameManager {
  games: Map<number, Game>

  constructor(public io: SocketServer) {
    this.games = new Map()
  }

  initGame(white: Socket, black: Socket) {}

  getGame(id: number) {
    return this.games.get(id)
  }
}
