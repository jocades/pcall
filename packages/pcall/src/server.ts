import { type Router } from './router'
import { handle } from './adapters/bun'
import type { AnyObject, MaybePromise } from './types'
import type { Server } from 'bun'
import { isFn } from './util'
import { Env } from './_env'
import { RPCError, error } from './error'
import { RPCRequest, RPCResponse } from './rpc'

export interface ServeOptions {
  port?: number
  headers?: HeadersInit
  context?: AnyObject | ((req: Request) => MaybePromise<AnyObject>)
}

export function serve(router: Router, opts?: ServeOptions): Server {
  return Bun.serve(handle(router, opts))
}

export function fetchHandler(
  router: Router,
  opts: Omit<ServeOptions, 'port'> = {},
) {
  const { headers, context } = opts
  const ctxIsFn = isFn(context)

  const handle = router.init()

  return async (req: Request): Promise<Response> => {
    const url = new URL(req.url)
    const time = logger(req, url)

    if (req.method === 'OPTIONS') {
      return new Response(null, { headers })
    }

    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 })
    }

    try {
      const ctx = ctxIsFn ? await context(req) : context

      if (url.searchParams.has('batch')) {
        const requests = await RPCRequest.from<[]>(req)

        console.log(requests.length, 'requests')

        const responses = await Promise.all(
          requests.map(async (req) => {
            return handle(req, ctx)
              .then((result) => new RPCResponse(req.id, result))
              .catch((err) => RPCResponse.error(req.id, err))
          }),
        )

        return Response.json(responses, { headers })
      }

      const request = await RPCRequest.from(req)

      const response = await handle(request, ctx)
        .then((result) => new RPCResponse(request.id, result))
        .catch((err) => RPCResponse.error(request.id, err))

      if (Env.DEBUG) {
        console.log(request)
        console.log(response)
      }

      return Response.json(response, { headers })
    } catch (err) {
      if (err instanceof RPCError) {
        return RPCResponse.send(-1, undefined, err)
      }
      // TODO: add onError option
      console.error(err)
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
