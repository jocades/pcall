import { sleep } from 'bun'
import { createProxy } from './proxy'
import { type Router } from './router'
import { type DecorateCaller } from './types'
import { RPCRequest, RPCResponse } from './rpc'
import { RPCError } from '../dist'

async function _fetch<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })

  return await res.json()
}

/* async function _fetch<T>(url: string, batch: RPCRequest[], fail = false) {
  if (fail) throw new Error('Test')
  console.log('FETCH', { batch })
  const responses = batch.map((req, i) => {
    // if (i == 1) {
    //   return new RPCResponse(req.id, undefined, new RPCError('FORBIDDEN'))
    // }
    return new RPCResponse(req.id, 'wtf')
  })
  console.log('== responses ==', responses)
  return responses
} */

export interface ClientOptions {
  /**
   * The URL of the server.
   */
  url: string
  /**
   * The link mode of the client.
   * @default 'linear'
   */
  link?: 'linear' | 'batch'
  /**
   * The batch configuration.
   * @default { max: 10, timeout: 100 }
   */
  batch?: BatchOptions
}

interface BatchOptions {
  max?: number
  timeout?: number
}

interface PromiseExecutor {
  resolve(value: unknown): void
  reject(reason?: any): void
}

const MAX = 10
const TIMEOUT = 500

class Batch {
  private url: string
  private max: number
  private timeout: number
  private timeoutId: Timer | null = null
  private requestId: number = 0
  private requests: RPCRequest[] = []
  private pendingRequests: Map<number, PromiseExecutor> = new Map()

  constructor(url: string, opts: BatchOptions = {}) {
    this.url = url
    this.max = opts.max ?? MAX
    this.timeout = opts.timeout ?? TIMEOUT
  }

  addRequest(method: string, params?: unknown) {
    const req = new RPCRequest(this.requestId++, method, params)
    this.requests.push(req)

    const promise = new Promise((resolve, reject) => {
      this.pendingRequests.set(req.id, { resolve, reject })
    })

    if (this.requests.length >= this.max) {
      console.log('== MAX ==')
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
        this.timeoutId = null
      }
      this.sendBatch()
    } else if (!this.timeoutId) {
      this.timeoutId = setTimeout(() => {
        this.sendBatch()
        this.timeoutId = null
      }, this.timeout)
    }

    return promise
  }

  private async sendBatch() {
    const batch = this.requests.slice()
    this.requests.length = 0

    console.log('== senging batch ==', batch.length)

    if (batch.length === 0) return

    try {
      const responses = await _fetch<RPCResponse[]>(this.url, batch)

      for (const { id, result, error } of responses) {
        const request = this.pendingRequests.get(id)

        if (!request) {
          console.error('No pending request with ID', id)
          return
        }

        if (error) {
          request.reject(error)
        } else {
          request.resolve(result)
        }

        this.pendingRequests.delete(id)
      }
    } catch (err) {
      for (const { reject } of this.pendingRequests.values()) {
        reject(err)
      }
      this.pendingRequests.clear()
    }
  }
}

export function client<T extends Router>(opts: ClientOptions) {
  const batch =
    opts.link === 'batch' ? new Batch(opts.url + '?batch', opts.batch) : null

  return createProxy<DecorateCaller<T['$def']>>((path, args) => {
    const method = path.join('.')
    const params = args[0]

    return batch
      ? batch.addRequest(method, params)
      : linear(opts.url, method, params)
  })
}

async function linear(url: string, method: string, params: unknown) {
  const request = new RPCRequest(1, method, params)
  const response = await _fetch<RPCResponse>(url, request)

  if ('error' in response) {
    throw response.error
  }

  return response.result
}
