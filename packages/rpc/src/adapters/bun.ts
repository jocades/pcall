import { RPC } from '@/rpc'
import { RPCError } from '@/error'
import type { Serve } from 'bun'
import { json, res, type ServeConfig } from '@/server'

export function handle(config: ServeConfig): Serve {
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
