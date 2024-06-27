import { type Router } from './router'
import { handle } from './adapters/bun'
import type { AnyObject, MaybePromise } from './types'
import type { Server, WebSocketHandler } from 'bun'
import { isFn } from './util'
import { RPCRequest, RPCResponse } from './rpc'
import { Context, X } from './http'

export interface ServeOptions {
  port?: number
  headers?: Record<string, string>
  context?: AnyObject | ((req: Request) => MaybePromise<AnyObject>)
  endpoint?: string
  static?: StaticOptions
  websocket?: WebSocketHandler
  onError?: (err: Error) => MaybePromise<void>
}

interface StaticOptions {
  /**
   * Directory to serve static files from.
   * @default 'static'
   */
  dir?: string
  /**
   * Fallback file to serve when the requested file is not found.
   * @default 'index.html'
   */
  fallback?: string
}

export function serve(router: Router, opts?: ServeOptions): Server {
  return Bun.serve(handle(router, opts))
}

export function fetchHandler(router: Router, opts: ServeOptions = {}) {
  const app = new X(opts)

  app.get(
    '/test',
    async (c, next) => {
      console.log('mw1', c.req.url.pathname)
      await next()
      console.log('mw1 done')
    },
    async (c) => {
      console.log('mw2')
      return c.text('Hello, World!')
    },
  )

  app.options('*', (c) => c.send())

  if (opts.static) {
    app.get(
      '*',
      serveStatic(
        opts.static?.dir ?? 'static',
        opts.static?.fallback ?? 'index.html',
      ),
    )
  }

  const handle = router.init()
  const { context, endpoint = '/rpc' } = opts

  app.post(endpoint, async (c) => {
    const env = isFn(context) ? await context(c.req._req) : context

    if (c.req.url.searchParams.has('batch')) {
      const requests = await RPCRequest.from<[]>(c.req)
      const responses = await Promise.all(
        requests.map(async (req) => {
          return handle(req, env)
            .then((result) => new RPCResponse(req.id, result))
            .catch((err) => RPCResponse.error(req.id, err))
        }),
      )

      return c.json(responses)
    }

    const request = await RPCRequest.from(c.req)
    const response = await handle(request, env)
      .then((result) => new RPCResponse(request.id, result))
      .catch((err) => RPCResponse.error(request.id, err))

    return c.json(response)
  })

  app.get(`${endpoint}/ws`, upgradeWebSocket())

  app.get(`${endpoint}/test-error`, () => {
    throw new Error('Test error')
  })

  return app.fetch()
}

function serveStatic(dir: string, fallback: string) {
  return async (c: Context) => {
    const path = `${dir}${c.req.url.pathname === '/' ? '/index.html' : c.req.url.pathname}`
    const file = (await Bun.file(path).exists())
      ? Bun.file(path)
      : Bun.file(`${dir}/${fallback}`)

    c.header('content-type', file.type)
    return c.file(file)
  }
}

function upgradeWebSocket() {
  return (c: Context) => {
    if (c.upgrade()) {
      return undefined as unknown as Response
    }
    c.status(500)
    return c.text('Upgrade failed')
  }
}

function getOrigin(req: Request) {
  return {
    referer: req.headers.get('Referer'),
    origin: req.headers.get('Origin'),
    host: req.headers.get('Host'),
  }
}

export interface CorsOptions {
  origins?: string[]
  methods?: string[]
  headers?: string[]
}

export function cors(opts: CorsOptions = {}): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': opts.origins?.join(', ') ?? '*',
    'Access-Control-Allow-Methods':
      opts.methods?.join(', ') ?? 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': opts.headers?.join(', ') ?? 'Content-Type',
  }
}
