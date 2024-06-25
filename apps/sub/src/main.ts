import { client } from '../../../packages/pcall'
import { type AppRouter } from '../../../packages/pcall/test/mock'

const api = client<AppRouter>('http://localhost:8000/rpc')

const ws = api.$ws()

ws.on('connect', () => {
  console.log('connected')

  ws.emit('message', 'Hello, world!')

  ws.on('message', (data) => {
    console.log('received', data)
  })
})

function $<T extends Element>(selector: string) {
  return document.querySelector<T>(selector)!
}

const $btn = $<HTMLButtonElement>('#btn')

$btn.onclick = () => {
  ws.emit('message', 'Hello, world!')
}
