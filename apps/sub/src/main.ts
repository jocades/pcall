import { SocketClient } from '../../../packages/pcall/src/socket/socket-client'

const ws = new SocketClient('ws://localhost:8000/ws')

ws.on('connect', () => {
  console.log('connected')

  ws.emit('message', 'Hello, world!')

  ws.on('message', (data) => {
    console.log('received', data)
  })
})

const $ = (selector: string) => document.querySelector(selector)

const $btn = $('#btn') as HTMLButtonElement

$btn.onclick = () => {
  ws.emit('message', 'Hello, world!')
}
