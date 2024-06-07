import { createProxy } from './proxy'
import { type Router } from './router'
import { type DecorateCaller } from './types'
import { RPCRequest, RPCResponse } from './rpc'
import { isFn } from './util'
import { Env } from './_env'

export interface ClientOptions {
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
  /**
   * Whether to log requests and responses to the console.
   * @default NODE_ENV === 'development'
   */
  logger?: boolean | (() => boolean)
}

interface BatchOptions {
  max?: number
  timeout?: number
}

/**
 * Create a client for the given router.
 * Use the `AppRouter type` as a generic to infer the router definition and
 * safely call the methods.
 * ```ts
 * const api = client<AppRouter>('http://localhost:8000')
 * const data = api.users.getById({ userId: 1 })
 * ```
 * @param url The URL of the server.
 * @param opts The client options.
 * @returns The client proxy.
 */
export function client<T extends Router>(url: string, opts: ClientOptions) {
  const loggerx = (isFn(opts.logger) ? opts.logger() : opts.logger)
    ? logger
    : undefined

  const batch =
    opts.link === 'batch'
      ? new Batch(url + '?batch', loggerx, opts.batch)
      : null

  return createProxy<DecorateCaller<T['$def']>>((path, args) => {
    const method = path.join('.')
    const params = args[0]

    return batch
      ? batch.addRequest(method, params)
      : linear(url, method, params, loggerx)
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
  private logger?: Logger

  constructor(url: string, logger?: Logger, opts: BatchOptions = {}) {
    this.url = url
    this.max = opts.max ?? MAX
    this.timeout = opts.timeout ?? TIMEOUT
    this.logger = logger
  }

  addRequest(method: string, params?: unknown) {
    const req = new RPCRequest(this.requestId++, method, params)
    this.requests.push(req)

    const promise = new Promise((resolve, reject) => {
      this.pendingRequests.set(req.id, { resolve, reject })
    })

    if (this.requests.length >= this.max) {
      this.debug(`== max reached | requests: ${this.requests.length} ==`)
      if (this.timeoutId) {
        this.debug(`== clearing timeout | requests: ${this.requests.length} ==`)
        clearTimeout(this.timeoutId)
        this.timeoutId = null
      }
      this.send()
    } else if (!this.timeoutId) {
      this.debug(`== setting timeout | requests: ${this.requests.length} ==`)
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

    this.debug(`== sending batch | requests: ${batch.length} ==`)

    if (batch.length === 0) return

    this.logger?.info('batch', batch)

    try {
      const responses = await _fetch<[]>(this.url, batch)

      for (const { id, result, error } of responses) {
        const request = this.pendingRequests.get(id)

        if (!request) {
          this.logger?.error('batch', { id, result, error })
          console.error('No pending request with ID', id)
          continue
        }

        if (error) {
          this.logger?.error('batch', { id, result, error })
          request.reject(error)
        } else {
          this.logger?.ok('batch', { id, result, error })
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

  private debug(...msg: unknown[]) {
    if (Env.DEBUG) console.log(...msg)
  }
}

async function linear(
  url: string,
  method: string,
  params: unknown,
  logger?: Logger,
) {
  const request = new RPCRequest(1, method, params)
  logger?.info(request.method, request)
  const response = await _fetch(url, request)

  if ('error' in response) {
    logger?.error(request.method, response)
    throw response.error
  }

  logger?.ok(request.method, response)

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

function log(
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

type Logger = typeof logger

const logger = {
  info: (method, data) => log('up', method, data, 'blue'),
  ok: (method, data) => log('down', method, data, 'green'),
  error: (method, data) => log('down', method, data, 'red'),
} satisfies Record<string, (method: string, data: unknown) => void>
