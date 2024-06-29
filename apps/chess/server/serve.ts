import { router, pc, serve } from '@/..'

import { cors } from '@/http'
import { Socket, SocketServer } from '@/ws/server'
import { Game } from './chess'

const app = router({
  ping: pc().action(() => 'pong'),
})

export type AppRouter = typeof app

const io = new SocketServer()

let id = 0
let waiting: Socket | null = null
const games = new Map<number, Game>()

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected`)
  })

  socket.on('search', () => {
    if (!waiting) {
      waiting = socket
      return
    }

    id++
    waiting.emit('init', { id, color: 'white' })
    socket.emit('init', { id, color: 'black' })

    // use black and white + channel to allow for 3rd party viewers in the channel
    const game = new Game(id, waiting, socket)
    games.set(game.id, game)

    waiting = null
  })

  socket.on(
    'move',
    ({ id, move }: { id: number; move: { from: string; to: string } }) => {
      const game = games.get(id)!
      game.makeMove(move)
    },
  )
})

const server = serve(app, {
  headers: cors(),
  websocket: io.handler(),
  static: {
    dir: './static',
    fallback: 'index.html',
  },
  onError(err) {
    console.log('onError()')
    console.log(err.message)
  },
})

console.log(`🔥Listening at ${server.url.href.slice(0, -1)}`)
