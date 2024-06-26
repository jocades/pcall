import type { ServerWebSocket, WebSocketHandler } from 'bun'
import type { AnyFn } from '@/types'

export interface Payload {
  type: 'object' | 'literal' | 'function'
  value: any
}

export interface Message {
  event: string
  payload: Payload[]
}

interface Channel<T = any> {
  sockets: Set<Socket>
  context: T
}

export class IO {
  private events: Map<string, (socket: Socket) => void> = new Map()
  private clients: Map<string, Socket> = new Map()
  private channels: Map<string | number, Channel> = new Map()

  on(event: 'connection', handler: (socket: Socket) => void): void {
    this.events.set(event, handler)
  }

  trigger(event: 'connection', id: string): void {
    const handler = this.events.get(event)

    if (!handler) {
      throw new Error(`No handler for event: ${event}`)
    }

    handler(this.getClient(id))
  }

  emit(event: string, data?: unknown): void {
    this.clients.forEach((socket) => socket.emit(event, data))
  }

  addClient(ws: ServerWebSocket<{ id: string }>): void {
    this.clients.set(ws.data.id, new Socket(ws, this))
  }

  getClient(id: string): Socket {
    if (!this.clients.has(id)) {
      throw new Error(`No client with id: ${id}`)
    }
    return this.clients.get(id)!
  }

  removeClient(id: string): void {
    this.clients.delete(id)
  }

  addChannel<T>(id: string | number, context: T): void {
    this.channels.set(id, {
      sockets: new Set(),
      context,
    })
  }

  getChannel<T>(id: string | number): Channel<T> {
    if (!this.channels.has(id)) {
      throw new Error(`No no channel with id: ${id}`)
    }
    return this.channels.get(id)!
  }

  removeChannel(id: string | number): void {
    this.channels.delete(id)
  }

  join(channelId: string | number, socket: Socket): void {
    if (!this.channels.has(channelId)) {
      this.addChannel(channelId, null)
    }
    this.channels.get(channelId)!.sockets.add(socket)
  }

  leave(channelId: string | number, socket: Socket): void {
    this.getChannel(channelId).sockets.delete(socket)
  }

  broadcast(
    channelId: string | number,
    event: string,
    data: unknown,
    socketId?: string,
  ) {
    this.getChannel(channelId).sockets.forEach((socket) => {
      if (socket.id === socketId) return
      socket.emit(event, data)
    })
  }

  handler() {
    return webSocketHandler(this)
  }
}

function webSocketHandler(io: IO): WebSocketHandler<{ id: string }> {
  return {
    open(ws) {
      io.addClient(ws)
      io.trigger('connection', ws.data.id)
    },
    close(ws) {
      io.getClient(ws.data.id).trigger('disconnect')
      io.removeClient(ws.data.id)
    },
    message(ws, data) {
      const socket = io.getClient(ws.data.id)
      const message: Message = JSON.parse(data as string)
      const payload = parse(message)

      socket.trigger(message.event, ...payload)
    },
  }
}

export class Socket {
  readonly id: string
  private io: IO
  private ws: ServerWebSocket<{ id: string }>
  private events: Map<string, AnyFn> = new Map()

  constructor(ws: ServerWebSocket<{ id: string }>, io: IO) {
    this.id = ws.data.id
    this.io = io
    this.ws = ws
  }

  on(event: 'disconnect' | (string & {}), handler: AnyFn) {
    this.events.set(event, handler)
  }

  emit(event: string, ...payload: unknown[]): void {
    this.ws.send(JSON.stringify({ event, payload }))
  }

  trigger(event: string, ...data: unknown[]): void {
    const handler = this.events.get(event)

    if (!handler) {
      throw new Error(`No handler for event: ${event}`)
    }

    handler(...data)
  }

  join(channelId: string | number): void {
    this.io.join(channelId, this)
  }

  leave(channelId: string | number): void {
    this.io.leave(channelId, this)
  }

  broadcast(roomId: string | number, event: string, data: unknown): void {
    this.io.broadcast(roomId, event, data, this.id)
  }
}

const parser = {
  object: JSON.parse,
  literal: (val: string | number) => val,
  function: (val: string) => eval(`(${val})`),
}

function parse(message: Message): unknown[] {
  return message.payload.map((item) => {
    if (!parser[item.type]) {
      throw new Error(`Unknown type: ${item.type}`)
    }
    return parser[item.type](item.value)
  })
}
