import type { Serve } from 'bun'
import type { Router } from '../router'
import { fetchHandler, type ServeOptions } from '../server'
import { IO } from '../socket/socket-server'

const io = new IO()

io.on('connection', (socket) => {
  console.log('connected', socket.id)
  console.log('clients', io.clients.size)

  socket.on('message', (data) => {
    console.log('message', data)
    socket.emit('message', 'Hello, client!')
    // io.emit('message', 'Hello, everyone!')
  })

  socket.on('disconnect', () => {
    console.log('disconnected', socket.id)
  })

  socket.on('ping', () => 'Pong!')

  socket.on('test', (str, num, obj, fn) => {
    console.log('test', str, num, obj, fn)
    const what = fn(1, 2)
    console.log('what', what)
  })
})

export function handle(router: Router, opts?: ServeOptions) {
  return {
    port: opts?.port ?? 8000,
    fetch: fetchHandler(router, opts),
    websocket: io.handler(),
  } satisfies Serve<{ id: string }>
}
