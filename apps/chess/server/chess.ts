import type { Channel, Socket, SocketServer } from '@/ws/server'
import { Chess, type Move } from 'chess.js'

const chess = new Chess()

chess.move('e4')

export const enum Events {
  INIT = 'init',
  MOVE = 'move',
  END = 'end',
}

export class Game {
  id: number
  chess: Chess
  white: Socket
  black: Socket
  timestamp: number

  constructor(id: number, white: Socket, black: Socket) {
    this.id = id
    this.chess = new Chess()
    this.timestamp = Date.now()

    this.white = white
    this.black = black
  }

  makeMove(move: { from: string; to: string }) {
    try {
      this.chess.move(move)
    } catch (err) {
      console.error(err)
      return
    }

    // only emit to the player receiving the move
    // it is already validated in the frontend
    // for now account for valid move
    // this[color === 'white' ? 'black' : 'white'].emit(Events.MOVE, move)
    // this[this.switch(color)].emit(Events.MOVE, move)
    const to = chess.turn() === 'w' ? 'black' : 'white'
    this[to].emit(Events.MOVE, move)
  }

  switch(color: 'white' | 'black') {
    return color === 'white' ? 'black' : 'white'
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
