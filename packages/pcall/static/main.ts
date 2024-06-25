import { client } from '..'
import { type AppRouter } from '../test/mock'

const api = client<AppRouter>('http://localhost:8000/rpc')

const ws = api.$ws()

ws.on('connect', () => {
  console.log('Connected to server')

  ws.emit('message', 'Hello from client!')

  ws.on('message', (data) => {
    console.log('Message received', data)
  })
})

ws.on('disconnect', () => {
  console.log('Disconnected from server')
})

document.querySelector<HTMLButtonElement>('button')!.onclick = () => {
  ws.emit('message', 'Hello from client!')
}
