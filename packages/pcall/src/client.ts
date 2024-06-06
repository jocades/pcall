import { sleep } from 'bun'
import { createProxy } from './proxy'
import { type Router } from './router'
import { type DecorateCaller } from './types'
import { RPCRequest, RPCResponse } from './rpc'
import { RPCError } from '../dist'

/* async function _fetch<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })

  return await res.json()
} */

async function _fetch<T>(batch: RPCRequest[], fail = false) {
  if (fail) throw new Error('Test')
  console.log('FETCH', { batch })
  const responses = batch.map((req, i) => {
    if (i == 1) {
      return new RPCResponse(req.id, undefined, new RPCError('FORBIDDEN'))
    }
    return new RPCResponse(req.id, 'wtf')
  })
  console.log({ responses })
  return responses
}

export interface ClientConfig {
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
  batch?: {
    max?: number
    timeout?: number
  }
}

interface PromiseExecutor {
  resolve(value: unknown): void
  reject(reason?: any): void
}

class Batch {
  private url: string
  private timeout: number
  private timeoutId: Timer | null = null
  private requestId: number = 0
  private requests: RPCRequest[] = []
  private pendingRequests: Map<number, PromiseExecutor> = new Map()

  constructor(url: string, timeout: number) {
    this.url = url
    this.timeout = timeout
  }

  addRequest(method: string, params?: unknown) {
    const req = new RPCRequest(this.requestId++, method, params)
    this.requests.push(req)

    return new Promise((resolve, reject) => {
      this.pendingRequests.set(req.id, { resolve, reject })

      console.log('== PROMISE CB ==', this.pendingRequests)

      if (!this.timeoutId) {
        this.timeoutId = setTimeout(async () => {
          await this.sendBatch()
          this.timeoutId = null
        }, this.timeout)
      }
    })
  }

  private async sendBatch() {
    const batch = this.requests.slice()
    this.requests.length = 0

    if (batch.length === 0) return

    try {
      const responses = await _fetch<RPCResponse[]>(batch)

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
      for (const { reject } of Object.values(this.pendingRequests)) {
        reject(err)
      }
      this.pendingRequests.clear()
    }
  }
}

const batch = new Batch('', 500)

/* const r1 = batch.addRequest('ping')
const r2 = batch.addRequest('posts.create', { title: 'wtf' })

console.log('== ADDED ==', batch.pendingRequests)

try {
  console.log(await r1, await r2)
} catch (err) {
  console.log(err)
}

console.log('== AWAITED ==', batch.pendingRequests) */

const reqs = [
  batch.addRequest('ping'),
  batch.addRequest('posts.create', { title: 'wtf' }),
  batch.addRequest('x'),
]

try {
  await Promise.all(reqs)
} catch (err) {
  console.error(err)
}

// console.log('== pending requests ==', batch.pendingRequests)

// const p = new Promise((res, rej) => {
//   sleep(1000).then(() => res('Done'))
// })
// console.log(p)
//
// p.then((res) => console.log(res))
//
// p.then((res) => console.error(res))

export function client<T extends Router>(config: ClientConfig) {
  // const url = new URL(config.url)

  return createProxy<DecorateCaller<T['$def']>>((path, args) => {
    // url.searchParams.set('p', path.join('.'))
    const url = config.url + '?p=' + path.join('.')
    // return _fetch(url, args[0])
  })
}
