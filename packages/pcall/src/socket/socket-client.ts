import type { AnyFn } from '@/types'
import { isFn, isLiteral, isObj } from '../util'
import type { Message } from './socket-server'

export class SocketClient {
  private ws: WebSocket
  private events: Map<string, AnyFn> = new Map()

  constructor(url: string) {
    this.ws = new WebSocket(url)
    this.setup()
  }

  get connected(): boolean {
    return this.ws.readyState === WebSocket.OPEN
  }

  private setup() {
    this.ws.onopen = () => {
      this.events.get('connect')?.()
    }

    this.ws.onclose = () => {
      this.events.get('disconnect')?.()
    }

    this.ws.onmessage = ({ data }) => {
      const message: Message = JSON.parse(data)
      const handler = this.events.get(message.event)

      if (!handler) {
        throw new Error(`Event ${message.event} not found`)
      }

      handler(...message.payload)
    }

    this.ws.onerror = (err) => {
      console.error(err)
    }
  }

  emit(event: string, ...args: unknown[]) {
    if (!this.connected) {
      throw new Error('Socket is not open')
    }
    const payload = parse(args)
    this.ws.send(JSON.stringify({ event, payload }))
  }

  on(
    event: 'connect' | 'disconnect' | (string & {}),
    callback: (data: any) => void,
  ) {
    this.events.set(event, callback)
  }

  off(event: string) {
    this.events.delete(event)
  }

  close() {
    this.ws.close()
  }
}

function parse(values: unknown[]) {
  return values.map((arg) => {
    if (isObj(arg)) {
      return { type: 'object', value: JSON.stringify(arg) }
    }
    if (isFn(arg)) {
      return { type: 'function', value: arg.toString() }
    }
    if (isLiteral(arg)) {
      return { type: 'literal', value: arg }
    }
    throw new Error(`Unsupported type ${typeof arg} for value ${arg}`)
  })
}
