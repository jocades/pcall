import { type Router } from './router'
import { handle } from './adapters/bun'
import type { AnyObject, MaybePromise } from './types'
import type { Server } from 'bun'
import { isFn } from './util'
import { Env } from './_env'
import { RPCError } from './error'
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
    const time = logger(req)

    if (req.method === 'OPTIONS') {
      return new Response(null, { headers })
    }

    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 })
    }

    const url = new URL(req.url)
    const path = url.searchParams.get('p')

    if (!path) {
      return new Response('Bad request', { status: 400, headers })
    }

    const params = await json(req)
    const ctx = ctxIsFn ? await context(req) : context

    const rpcReq = new RPCRequest(path, params)

    let result: unknown
    let rpcRes: RPCResponse
    try {
      result = await handle(rpcReq, ctx)
      rpcRes = new RPCResponse(rpcReq.id, result)
    } catch (err) {
      if (!(err instanceof RPCError)) {
        throw err
      }
      rpcRes = new RPCResponse(rpcReq.id, undefined, err)
    }

    time()

    if (Env.DEBUG) {
      console.log({ method: path, params, result })
    }

    return Response.json(rpcRes, { headers })
  }
}

function logger(req: Request) {
  const start = performance.now()
  const url = new URL(req.url)
  const path = url.searchParams.get('p')
  console.log(`-> ${req.method} ${url.pathname} - ${path}`)

  return () => {
    const elapsed = (performance.now() - start).toFixed(3)
    console.log(`<- ${req.method} ${url.pathname} - ${path} - ${elapsed}ms`)
  }
}

function getOrigin(req: Request) {
  return {
    referer: req.headers.get('Referer'),
    origin: req.headers.get('Origin'),
    host: req.headers.get('Host'),
  }
}

async function json<T>(req: Request) {
  try {
    return (await req.json()) as T
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
