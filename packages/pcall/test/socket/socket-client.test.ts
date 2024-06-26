import { client } from '@/client'
import type { AppRouter } from '../mock'
import { procedure, router } from '../..'

// const ws = webSocket('ws://localhost:8000/rpc/ws', { dev: true })

const api = client<AppRouter>('http://localhost:8000/rpc')

const postsRouter = router({
  onUpdate: procedure().event((emit) => {
    emit('Hello from server')
    // cleanup function
    return () => {}
  }),
})

const app = router({
  posts: postsRouter,
})

// ws.on('posts.onUpdate', callback)
// api.posts.onUpdate((data) => {
//   console.log('POST UPDATED', data)
// })

const ws = api.$ws()

// const ws = new SocketClient('ws://localhost:8000/rpc/ws', { dev: true })

ws.on('connect', () => {
  ws.emit('message', 'Hello from client!')

  ws.on('message', (data) => {
    console.log('Message received', data)
  })

  ws.emit('test', 'Hello', 123, { obj: true }, (a: number, b: number) => a + b)
})

// ws.on('connect', () => {})

// api.$ws().on('message:receive', (data) => {
//   console.log('Message received', data)
// })
