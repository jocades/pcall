import { type Router } from './router'
import { handle } from './adapters/bun'
import type { AnyObject, MaybePromise } from './types'
import type { Server } from 'bun'
import { isFn } from './util'
import { Env } from './_env'
import { RPCError } from './error'

export interface ServeConfig {
  port?: number
  headers?: HeadersInit
  context?: AnyObject | ((req: Request) => MaybePromise<AnyObject>)
}

export function serve(router: Router, config?: ServeConfig): Server {
  return Bun.serve(handle(router, config))
}

export async function json<T>(req: Request) {
  try {
    return (await req.json()) as T
  } catch (err) {
    if (err instanceof SyntaxError) {
      return undefined
    }
    throw err
  }
}

interface CorsOptions {
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

export const OPEN_CORS = cors()

export const res = {
  json(data: unknown, status = 200) {
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json', ...OPEN_CORS },
      status,
    })
  },
  text(data: string, status = 200) {
    return new Response(data, {
      headers: OPEN_CORS,
      status,
    })
  },
}

export function fetchHandler(
  router: Router,
  config: Omit<ServeConfig, 'port'> = {},
) {
  const handle = router.init()
  const { headers, context } = config

  return async function _fetch(req: Request): Promise<Response> {
    const url = new URL(req.url)
    console.log(`${req.method} ${url.pathname} - ${url.search}`)

    console.log(getOrigin(req))

    if (req.method === 'OPTIONS') {
      return new Response(null, { headers })
    }

    if (req.method !== 'POST') {
      return res.text('Method not allowed', 405)
    }

    const path = url.searchParams.get('p')

    if (!path) {
      return new Response('Bad request', { status: 400, headers })
    }

    try {
      const body = await json(req)
      const ctx = isFn(context) ? await context(req) : context

      const result = await handle({ path, body }, ctx)

      if (Env.DEBUG) {
        console.log({ path, body, result })
      }

      return res.json(result)
    } catch (err) {
      if (err instanceof RPCError) {
        return res.json(err, 418)
      }
      throw err
    }
  }
}

function getOrigin(req: Request) {
  return {
    referer: req.headers.get('Referer'),
    origin: req.headers.get('Origin'),
    host: req.headers.get('Host'),
  }
}
