import { type Router } from './router'
import { handle } from './adapters/bun'
import type { AnyObject, MaybePromise } from './types'
import type { Server, WebSocketHandler } from 'bun'
import { isFn } from './util'
import { Env } from './_env'
import { RPCError } from './error'
import { RPCRequest, RPCResponse } from './rpc'

export interface ServeOptions<T = unknown> {
  port?: number
  headers?: HeadersInit
  context?: AnyObject | ((req: Request) => MaybePromise<AnyObject>)
  endpoint?: string
  static?: StaticOptions
  websocket?: WebSocketHandler<T>
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

export function serve<T>(router: Router, opts?: ServeOptions<T>): Server {
  return Bun.serve(handle(router, opts))
}

async function serveStatic(url: URL, dir: string, fallback: string) {
  const path = `${dir}${url.pathname === '/' ? '/index.html' : url.pathname}`
  const file = (await Bun.file(path).exists())
    ? Bun.file(path)
    : Bun.file(`${dir}/${fallback}`)

  return new Response(file, { headers: { 'content-type': file.type } })
}

export function fetchHandler<T>(router: Router, opts: ServeOptions<T> = {}) {
  const { headers, context, endpoint = '/rpc' } = opts
  const ctxIsFn = isFn(context)

  const handle = router.init()

  let wsID = 1

  return async (req: Request, server: Server): Promise<Response> => {
    const url = new URL(req.url)
    const time = logger(req, url)

    if (req.method === 'OPTIONS') {
      return new Response(null, { headers })
    }

    if (url.pathname === `${endpoint}/ws`) {
      if (server.upgrade(req, { data: { id: wsID++ } })) {
        // @ts-ignore
        return
      }
      return new Response('Upgrade failed', { status: 500 })
    }

    if (url.pathname !== endpoint) {
      if (opts.static) {
        const dir = opts.static.dir ?? 'static'
        const fallback = opts.static.fallback ?? 'index.html'

        return await serveStatic(url, dir, fallback)
      }

      return new Response('Not Found', { status: 404 })
    }

    try {
      if (url.pathname === `${endpoint}/test-error`) {
        throw new Error('Test error')
      }

      if (req.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 })
      }

      const env = ctxIsFn ? await context(req) : context

      if (url.searchParams.has('batch')) {
        const requests = await RPCRequest.from<[]>(req)

        console.log(requests.length, 'requests')

        const responses = await Promise.all(
          requests.map(async (req) => {
            return handle(req, env)
              .then((result) => new RPCResponse(req.id, result))
              .catch((err) => RPCResponse.error(req.id, err))
          }),
        )

        return Response.json(responses, { headers })
      }

      const request = await RPCRequest.from(req)

      const response = await handle(request, env)
        .then((result) => new RPCResponse(request.id, result))
        .catch((err) => RPCResponse.error(request.id, err))

      /* if (Env.DEBUG) {
        console.log(request)
        console.log(response)
      } */

      return Response.json(response, { headers })
    } catch (err: any) {
      if (opts.onError) {
        await opts.onError(err)
      } else {
        console.error(err)
      }

      if (err instanceof RPCError) {
        return RPCResponse.send(-1, undefined, err)
      }

      return new Response('Internal Server Error', { status: 500 })
    } finally {
      time()
    }
  }
}

function logger(req: Request, url: URL) {
  const start = performance.now()
  console.log(`-> ${req.method} ${url.pathname}`)
  return () => {
    const elapsed = (performance.now() - start).toFixed(3)
    console.log(`<- ${req.method} ${url.pathname} - ${elapsed}ms`)
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

export function cors(opts: CorsOptions = {}): HeadersInit {
  return {
    'Access-Control-Allow-Origin': opts.origins?.join(', ') ?? '*',
    'Access-Control-Allow-Methods':
      opts.methods?.join(', ') ?? 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': opts.headers?.join(', ') ?? 'Content-Type',
  }
}
