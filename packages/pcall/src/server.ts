import { type Router } from './router'
import { handle } from './adapters/bun'
import type { AnyObject, MaybePromise } from './types'
import type { Server, WebSocketHandler } from 'bun'
import { RPCRequest, RPCResponse } from './rpc'
import { isDef } from './util'
import { Context, Liar, logger, serveStatic, upgradeWebSocket } from './http'

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
  const app = new Liar(opts)
  const { endpoint = '/rpc' } = opts

  if (standalone) {
    if (
      opts.log ||
      (!isDef(opts.log) && process.env.NODE_ENV === 'development')
    ) {
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

    /* app.get('/test/*', (c) => {
      console.log('wildcard', c.req.url.pathname)
      return c.text('Wildcard')
    }) */

    app.get('/test/:id/*', (c) => {
      console.log('params', c.req.params)
      return c.text('Wildcard')
    })

    app.get('/test/:id', (c) => {
      console.log('params', c.req.params)
      return c.json(c.req.params)
    })

    app.get('/test/:id/:name', (c) => {
      console.log('params', c.req.params)
      return c.json(c.req.params)
    })

    app.options('*', (c) => {
      console.log('OPTIONS', c.req.path, c.req.headers)
      return c.send()
    })

    app.get(`${endpoint}/ws`, upgradeWebSocket())

    app.get(`${endpoint}/test-error`, () => {
      throw new Error('Test error')
    })

    if (opts.static) {
      app.get(
        '*',
        serveStatic(
          opts.static?.dir ?? 'static',
          opts.static?.fallback ?? 'index.html',
        ),
      )
    }
  }

  // RPC Interface
  const handle = router.init()

  app.post(standalone ? endpoint : '*', async (c) => {
    if (c.req.query.has('batch')) {
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
