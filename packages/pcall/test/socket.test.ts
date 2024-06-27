import { IO } from '@/socket/socket-server'
import { Database } from 'bun:sqlite'

class Message {
  id!: number
  userId!: string
  text!: string
  private _timestamp!: string

  get timestamp() {
    return new Date(this._timestamp)
  }
}

const db = new Database('data.db', {
  create: true,
  strict: true,
})

const createTable = db.query(
  `CREATE TABLE IF NOT EXISTS message (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT NOT NULL,
    text TEXT NOT NULL,
    _timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  )`,
)

createTable.run()

const q = {
  dropTable: db.query(`DROP TABLE IF EXISTS message`),

  insertMessage: db.query(
    `INSERT INTO message (userId, text) VALUES ($userId, $text)`,
  ),

  getMessages: db.query(`SELECT * FROM message`).as(Message),

  getMessagesWithLimit: db
    .query(`SELECT * FROM message LIMIT $limit OFFSET $offset`)
    .as(Message),

  deleteMessage: db.query(`DELETE FROM message WHERE id = $id`),
}

// q.dropTable.run()

class Chat {
  id = 'GLOBAL'
  users: string[] = []
  messages: Message[]

  constructor() {
    this.messages = q.getMessages.all()
  }

  addUser(userId: string) {
    this.users.push(userId)
  }

  removeUser(userId: string) {
    const index = this.users.indexOf(userId)
    if (index !== -1) {
      this.users.splice(index, 1)
    }
  }

  getMessages(opts?: { limit: number; offset: number }) {
    if (opts) {
      return q.getMessagesWithLimit.all(opts)
    }
    return q.getMessages.all()
  }

  addMessage(message: Message) {
    const { lastInsertRowid } = q.insertMessage.run({
      userId: message.userId,
      text: message.text,
    })
    message.id = lastInsertRowid as number
    this.messages.push(message)
  }
}

const chat = new Chat()

const io = new IO()

io.on('connection', (socket) => {
  console.log('Client connected', { id: socket.id })
  // @ts-ignore
  console.log('Clients:', io.clients.size)

  socket.on('disconnect', () => {
    console.log('Client disconnected', socket.id)
    // socket.leave(chat.id)
    // chat.removeUser(socket.id)
    // io.broadcast(chat.id, 'chat:leave', socket.id)
  })

  socket.on('chat:join', (userId: string) => {
    socket.join(chat.id)
    chat.addUser(userId)

    socket.emit('chat:joined', {
      userId,
      users: chat.users,
      messages: chat.messages,
    })

    socket.broadcast(chat.id, 'chat:join', {
      userId,
      users: chat.users,
    })

    console.log(`User ${socket.id} joined chat ${chat.id}`)
  })

  socket.on('chat:leave', (userId: string) => {
    io.broadcast(chat.id, 'chat:leave', userId)
    socket.leave(chat.id)
    chat.removeUser(userId)

    console.log(`User ${socket.id} left chat ${chat.id}`)
  })

  socket.on('message:send', (message: Message) => {
    console.log('Message received:', message)

    chat.addMessage(message)
    socket.broadcast(chat.id, 'message:receive', message)
  })
})

export { io }
