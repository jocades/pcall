import { type Router } from './router'
import { handle } from './adapters/bun'
import type { AnyObject, MaybePromise } from './types'
import type { Server } from 'bun'
import { isFn } from './util'
import { Env } from './_env'
import { RPCError, error } from './error'
import { RPCRequest, RPCResponse } from './rpc'

export interface ServeConfig {
  port?: number
  headers?: HeadersInit
  context?: AnyObject | ((req: Request) => MaybePromise<AnyObject>)
}

export function serve(router: Router, config?: ServeConfig): Server {
  return Bun.serve(handle(router, config))
}

export function fetchHandler(
  router: Router,
  config: Omit<ServeConfig, 'port'> = {},
) {
  const { headers, context } = config
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
        const requests = await json<RPCRequest[]>(req)

        if (!requests) {
          return Response.json(
            new RPCResponse(
              0,
              undefined,
              error('PARSE_ERROR', 'error parsing body'),
            ),
          )
        }

        console.log(requests.length, 'requests')
        // console.log(requests)

        const results = await Promise.all(
          requests.map(async (req) => {
            return handle(req, ctx)
              .then((result) => new RPCResponse(req.id, result))
              .catch((err) => new RPCResponse(req.id, undefined, err))
          }),
        )

        return Response.json(results)
      }

      const request = await json<RPCRequest>(req)

      if (!request) {
        return Response.json(
          new RPCResponse(
            0,
            undefined,
            error('PARSE_ERROR', 'error parsing body'),
          ),
        )
      }

      const response = await handle(request, ctx)
        .then((result) => new RPCResponse(request.id, result))
        .catch((err) => {
          if (!(err instanceof RPCError)) {
            throw err
          }
          return new RPCResponse(request.id, undefined, err)
        })

      if (Env.DEBUG) {
        console.log(request)
        console.log(response)
      }

      return Response.json(response, { headers })
    } catch (err) {
      return new Response('INTERNAL_SERVER_ERROR', { status: 5000 })
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

async function json<R, T extends { json(): R } = any>(what: T) {
  try {
    return await what.json()
  } catch (err) {
    if (err instanceof SyntaxError) {
      return undefined
    }
    throw err
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
