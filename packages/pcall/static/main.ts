import { client } from '..'
import { type AppRouter } from '../test/mock'

const api = client<AppRouter>('http://localhost:8000/rpc')

const ws = api.$ws()

let userId = ''

ws.on('connect', () => {
  console.log('Connected to server')
})

ws.on('disconnect', () => {
  console.log('Disconnected from server')
  ws.emit('chat:leave', userId)
})

// for single user when first joining chat
ws.on('chat:joined', ({ userId, users, messages }) => {
  console.log('User joined chat:', userId)
  updateUsers(users)
  messages.forEach(addMessage)
})

// for all users when a new user joins chat
ws.on('chat:join', ({ userId, users }) => {
  console.log('User joined chat:', userId)
  updateUsers(users)
})

ws.on('chat:leave', (userId: string) => {
  console.log('User left chat:', userId)
})

ws.on('message:receive', (data: { userId: string; text: string }) => {
  addMessage(data)
})

function $<T extends Element>(selector: string) {
  return document.querySelector<T>(selector)!
}

function updateUsers(users: string[]) {
  $<HTMLParagraphElement>('#users').innerText = users.join(', ')
}

function addMessage(message: { userId: string; text: string }) {
  const isUser = message.userId === userId

  const $message = document.createElement('article')
  $message.className = `chat ${isUser ? 'chat-end' : 'chat-start'}`

  $message.innerHTML = `
    <div class="chat-header text-zinc-400">
      ${message.userId}
    </div>
    <div class="chat-bubble text-black ${isUser ? 'bg-green-200' : 'bg-blue-200'}">
      ${message.text}
    </div>
  `

  $('#messages').appendChild($message)
}

$<HTMLFormElement>('#login').addEventListener('submit', (e) => {
  e.preventDefault()
  userId = (e.target as HTMLFormElement)?.username?.value?.trim()
  if (!userId) return
  ws.emit('chat:join', userId)
})

$<HTMLFormElement>('#chat').addEventListener('submit', (e) => {
  e.preventDefault()
  const $form = e.target as HTMLFormElement
  const text = $form?.message?.value?.trim()
  if (!text) return
  addMessage({ userId, text })
  ws.emit('message:send', { userId, text })
  $form.reset()
})
