import type { AnyFn } from '@/types'
import type { ServerWebSocket, WebSocketHandler } from 'bun'

interface Channel<T = any> {
  sockets: Set<Socket>
  context: T
}

type Payload = {
  type: string
  value: any
}

type Message = {
  event: string
  payload: Payload[]
}

type IOOptions = {
  debug: boolean
}

export class IO {
  events: Map<string, (socket: Socket) => void> = new Map()
  clients: Map<string, Socket> = new Map()
  channels: Map<string | number, Channel> = new Map()

  constructor(
    public opts: IOOptions = {
      debug: false,
    },
  ) {}

  on(event: 'connection', handler: (socket: Socket) => void): void {
    this.events.set(event, handler)
  }

  trigger(event: 'connection', ws: ServerWebSocket<{ id: string }>): void {
    if (event === 'connection') {
      this.clients.set(ws.data.id, new Socket(ws))
    }

    const handler = this.events.get(event)

    if (!handler) {
      throw new Error(`No handler for event: ${event}`)
    }

    handler(this.client(ws.data.id))
  }

  emit(event: string, data?: any): void {
    this.clients.forEach((socket) => socket.emit(event, data))
  }

  client(id: string): Socket {
    if (!this.clients.has(id)) {
      throw new Error(`No client with id: ${id}`)
    }
    return this.clients.get(id)!
  }

  channel<T>(id: string | number): Channel<T> {
    if (!this.channels.has(id)) {
      throw new Error(`No no channel with id: ${id}`)
    }
    return this.channels.get(id)!
  }

  join(channelId: string | number, socket: Socket): void {
    if (!this.channels.has(channelId)) {
      this.channels.set(channelId, {
        sockets: new Set(),
        context: {},
      })
    }
    this.channels.get(channelId)!.sockets.add(socket)
  }

  broadcast(
    channelId: string | number,
    event: string,
    data: any,
    socketId?: string,
  ) {
    this.channel(channelId).sockets.forEach((socket) => {
      if (socket.id === socketId) return
      socket.emit(event, data)
    })
  }

  handler() {
    return websocket(this)
  }
}

function websocket(io: IO): WebSocketHandler<{ id: string }> {
  return {
    open(ws) {
      console.log('WebSocket opened', ws.data.id)
      io.trigger('connection', ws)
      console.log('CLIENTS', io.clients.keys())
    },
    close(ws, code, message) {
      console.log('WebSocket closed', code, message)
      io.client(ws.data.id).trigger('disconnect')
      io.clients.delete(ws.data.id)
      console.log('CLIENTS', io.clients.keys())
    },
    message(ws, data) {
      const socket = io.client(ws.data.id)
      const message = JSON.parse(data as string)

      if (io.opts.debug) {
        console.log('CLIENT MESSAGE', message)
      }

      const payload = parse(message)

      if (io.opts.debug) {
        console.log('PARSED MESSAGE', { event: message.event, payload })
      }

      socket.trigger(message.event, ...payload)
    },
    drain(ws) {}, // the socket is ready to receive more data
  }
}

export class Socket {
  readonly id: string
  events: Map<string, AnyFn> = new Map()

  constructor(public ws: ServerWebSocket<{ id: string }>) {
    this.id = ws.data.id
  }

  on(event: string | 'disconnect', handler: AnyFn) {
    this.events.set(event, handler)
  }

  emit(event: string, payload: unknown): void {
    this.ws.send(JSON.stringify({ event, payload }))
  }

  trigger(event: string, ...data: unknown[]): void {
    const handler = this.events.get(event)

    if (!handler) {
      throw new Error(`No handler for event: ${event}`)
    }

    handler(...data)
  }

  // join(channelId: string | number): void {}
  // broadcast(roomId: string | number, event: string, data: any): void {}
}

const parser = {
  object: JSON.parse,
  literal: (val: string) => val,
  function: (val: string) => eval(`(${val})`),
}

function parse(message: Message): unknown[] {
  return message.payload.map((item) => {
    if (!parser[item.type as keyof typeof parser]) {
      throw new Error(`Unknown type: ${item.type}`)
    }
    return parser[item.type as keyof typeof parser](item.value)
  })
}
