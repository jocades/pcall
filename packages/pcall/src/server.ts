import { type Router } from './router'
import { handle } from './adapters/bun'
import type { AnyObject, MaybePromise } from './types'
import type { Server, WebSocketHandler } from 'bun'
import { RPCRequest, RPCResponse } from './rpc'
import { Context, LinearRouter, _upgrade, type Handler } from './http'
import { Env } from './_env'
import { isDef } from './util'

export interface ServeOptions {
  port?: number
  headers?: Record<string, string>
  endpoint?: string
  static?: StaticOptions
  websocket?: WebSocketHandler<any>
  context?: AnyObject | ((req: Request) => MaybePromise<AnyObject>)
  onError?: (err: Error) => MaybePromise<void>
  notFound?: (c: Context) => MaybePromise<Response>
  log?: boolean
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

export function fetchHandler(
  router: Router,
  opts: ServeOptions = {},
  standalone = false,
) {
  const app = new LinearRouter(opts)
  const { endpoint = '/rpc' } = opts

  if (standalone) {
    if (opts.log || (!isDef(opts.log) && Env.DEV)) {
      app.use(logger())
    }

    app.get(
      '/test',
      async (c, next) => {
        console.log('mw1', c.env)
        c.env.mw1 = 1
        await next()
        console.log('mw1 done')
      },
      async (c, next) => {
        console.log('mw2', c.env)
        c.env.mw2 = 2
        await next()
        console.log('mw2 done')
      },
      async (c) => {
        console.log('mw3', c.env)
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

    app.get(`${endpoint}/ws`, upgradeWebSocket())

    app.get(`${endpoint}/test-error`, () => {
      throw new Error('Test error')
    })
  }

  // RPC Interface
  const handle = router.init()

  app.post(standalone ? endpoint : '*', async (c) => {
    if (c.req.url.searchParams.has('batch')) {
      const requests = await RPCRequest.from<[]>(c.req)
      const responses = await Promise.all(
        requests.map(async (req) => {
          return handle(req, c.env)
            .then((result) => new RPCResponse(req.id, result))
            .catch((err) => RPCResponse.error(req.id, err))
        }),
      )

      return c.json(responses)
    }

    const request = await RPCRequest.from(c.req)
    const response = await handle(request, c.env)
      .then((result) => new RPCResponse(request.id, result))
      .catch((err) => RPCResponse.error(request.id, err))

    return c.json(response)
  })

  return app.fetch
}

function logger(
  opts: {
    in?: (c: Context) => string
    out?: (c: Context, elapsed: number) => string
    logIncoming?: boolean
  } = {},
): Handler {
  return async (c, next) => {
    const start = performance.now()
    if (opts.logIncoming || !isDef(opts.logIncoming)) {
      console.log(
        opts.in ? opts.in(c) : `-> ${c.req.method} ${c.req.url.pathname}`,
      )
    }
    await next()
    const elapsed = (performance.now() - start).toFixed(3)
    console.log(
      opts.out
        ? opts.out(c, Number(elapsed))
        : `<- ${c.req.method} ${c.req.url.pathname} | ${c._status} | ${elapsed}ms`,
    )
  }
}

function serveStatic(dir: string, fallback: string): Handler {
  return async (c) => {
    const path = `${dir}${c.req.url.pathname === '/' ? '/index.html' : c.req.url.pathname}`
    const file = (await Bun.file(path).exists())
      ? Bun.file(path)
      : Bun.file(`${dir}/${fallback}`)

    c.header('content-type', file.type)
    return c.file(file)
  }
}

function upgradeWebSocket(): Handler {
  return (c) => {
    if (c[_upgrade]()) {
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
