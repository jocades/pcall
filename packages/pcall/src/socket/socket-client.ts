import type { AnyFn } from '@/types'

export function webSocket(url: string, opts = { dev: false }) {
  return new SocketClient(url, opts)
}

export class SocketClient {
  ws: WebSocket
  events: Map<string, AnyFn> = new Map()
  connected = false

  constructor(url: string, opts = { dev: false }) {
    this.ws = new WebSocket(url)

    this.ws.onopen = () => {
      this.events.get('connect')?.()
      this.connected = true
      console.log('Connected to server')
    }

    this.ws.onclose = () => {
      this.events.get('disconnect')?.()
      console.log('Disconnected from server')
    }

    this.ws.onmessage = ({ data }) => {
      console.log('Message from server', data)
      const msg = JSON.parse(data)
      const handler = this.events.get(msg.event)
      if (!handler) {
        throw new Error(`Event ${msg.event} not found`)
      }
      handler(msg.payload)
    }

    this.ws.onerror = (err) => {
      console.error('Error:', err)
    }

    if (opts.dev) {
      this.on('reload', () => {
        location.reload()
      })
    }
  }

  emit(event: string, ...args: unknown[]) {
    if (this.ws.readyState !== WebSocket.OPEN) {
      throw new Error('Socket is not open')
    }
    const payload = parse(args)
    this.ws.send(JSON.stringify({ event, payload }))
  }

  on(event: 'connect' | 'disconnect' | string, callback: (data: any) => void) {
    this.events.set(event, callback)
  }

  off(event: string) {
    if (!this.events.has(event)) {
      throw new Error(`Cannot remove event '${event}'. Event not found`)
    }
    this.ws.removeEventListener(event, this.events.get(event)!)
    this.events.delete(event)
  }

  close() {
    this.ws.close()
  }
}

function parse(values: unknown[]) {
  return values.map((arg) => {
    if (arg != null && typeof arg === 'object') {
      return { type: 'object', value: JSON.stringify(arg) }
    }
    if (typeof arg === 'function') {
      return { type: 'function', value: arg.toString() }
    }
    if (typeof arg === 'string' || typeof arg === 'number') {
      return { type: 'literal', value: arg }
    }
    throw new Error(`Unsupported type ${typeof arg} for value ${arg}`)
  })
}
