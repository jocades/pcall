import { createProxy } from './proxy'
import { type Router } from './router'
import { type DecorateCaller } from './types'
import { RPCRequest, RPCResponse } from './rpc'

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

async function _fetch<T>(url: string, body: unknown) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })

  return RPCResponse.from<T>(res)
}

interface PromiseExecutor {
  resolve(value: unknown): void
  reject(reason?: any): void
}

const MAX = 10
const TIMEOUT = 100

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
      // console.log('== max reached ==')
      if (this.timeoutId) {
        // console.log('== clearing timeout ==')
        clearTimeout(this.timeoutId)
        this.timeoutId = null
      }
      this.send()
    } else if (!this.timeoutId) {
      // console.log('== setting timeout ==')
      this.timeoutId = setTimeout(() => {
        this.send()
        this.timeoutId = null
      }, this.timeout)
    }

    return promise
  }

  private async send() {
    const batch = this.requests.slice()
    this.requests.length = 0

    // console.log(`== sending batch | requests: ${batch.length} ==`)

    if (batch.length === 0) return

    // logger('>>', 'batch', batch, 'blue')
    log.info('batch', batch)

    try {
      const responses = await _fetch<[]>(this.url, batch)

      for (const { id, result, error } of responses) {
        const request = this.pendingRequests.get(id)

        if (!request) {
          // logger('<<', 'batch', { id, result, error }, 'red')
          log.error('batch', { id, result, error })
          console.error('No pending request with ID', id)
          continue
        }

        if (error) {
          // logger('<<', 'batch', { id, result, error }, 'red')
          log.error('batch', { id, result, error })
          request.reject(error)
        } else {
          // logger('<<', 'batch', { id, result, error }, 'green')
          log.ok('batch', { id, result, error })
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

async function linear(url: string, method: string, params: unknown) {
  const request = new RPCRequest(1, method, params)
  // logger('>>', request.method, request, 'blue')
  log.info(request.method, request)
  const response = await _fetch(url, request)

  if ('error' in response) {
    // logger('<<', request.method, response, 'red')
    log.error(request.method, response)
    throw response.error
  }

  // logger('<<', request.method, response, 'green')
  log.ok(request.method, response)

  return response.result
}

function css(styles: Record<string, string>) {
  return Object.entries(styles)
    .map(([k, v]) => `${k}: ${v}`)
    .join('; ')
}

const colors = {
  gray: 'rgba(100, 100, 100, 0.2)',
  blue: '#add8e6',
  green: '#90ee90',
  red: '#ffcccb',
}

const styles = css({
  padding: '2px 2px',
  color: 'black',
  ['border-radius']: '4px',
})

function logger(
  dir: 'up' | 'down',
  method: string,
  data: unknown,
  color: keyof typeof colors = 'gray',
) {
  console.log(
    `%c %s %s %O`,
    styles + `;background: ${colors[color]}`,
    dir === 'up' ? '>>' : '<<',
    method,
    data,
  )
}

const log = {
  info: (method, data) => logger('up', method, data, 'blue'),
  ok: (method, data) => logger('down', method, data, 'green'),
  error: (method, data) => logger('down', method, data, 'red'),
} satisfies Record<string, (method: string, data: unknown) => void>
