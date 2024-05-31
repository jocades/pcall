import { RPC } from '@/rpc'
import { flattenRouter, type Router } from '@/router'
import { RPCError } from '@/error'
import type { AnyObject } from '@/types'
import type { Serve } from 'bun'

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

const res = {
  json(data: unknown, status = 200) {
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      status,
    })
  },
  text(data: string, status = 200) {
    return new Response(data, {
      headers: { 'Content-Type': 'text/plain' },
      status,
    })
  },
}

export interface ServerConfig {
  router: Router
  context?: AnyObject | ((req: Request) => AnyObject)
  port?: number
}

export function handle(config: ServerConfig): Serve {
  const router = config.router.flat()

  return {
    port: config.port ?? 8000,
    async fetch(req) {
      const url = new URL(req.url)
      console.log(`${req.method} ${url.pathname} - ${url.search}`)

      if (req.method !== 'POST') {
        return res.text('Method not allowed', 405)
      }

      const path = url.searchParams.get('p')
      if (!path) return new Response('Bad request', { status: 400 })

      const body = await json(req)
      if (body) console.log(body)

      const ctx =
        typeof config.context === 'function'
          ? config.context(req)
          : config.context

      try {
        const result = RPC.handle({ path, body }, router, ctx)
        return res.json(result)
      } catch (err) {
        if (err instanceof RPCError) {
          return res.json(err, 418)
        }
        throw err
      }
    },
  }
}

export function serve(config: ServerConfig) {
  Bun.serve(handle(config))
  console.log('Listening on http://localhost:8000')
}
