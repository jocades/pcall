import { RPCError } from '../error'
import type { Serve } from 'bun'
import { cors, json, res, type ServeConfig } from '../server'
import { isFn } from '../util'

export function handle(config: ServeConfig): Serve {
  const handle = config.router.init()

  return {
    port: config.port ?? 8000,
    async fetch(req) {
      const url = new URL(req.url)
      console.log(`${req.method} ${url.pathname} - ${url.search}`)

      console.log({
        referer: req.headers.get('Referer'),
        origin: req.headers.get('Origin'),
        host: req.headers.get('Host'),
      })

      if (req.method === 'OPTIONS') {
        return new Response(null, { headers: cors() })
      }

      // return new Response('Hello World!', { headers: cors() })

      if (req.method !== 'POST') {
        return res.text('Method not allowed', 405)
      }

      const path = url.searchParams.get('p')
      if (!path)
        return new Response('Bad request', { status: 400, headers: cors() })

      const body = await json(req)
      if (body) console.log(body)

      const ctx = isFn(config.context)
        ? await config.context(req)
        : config.context

      try {
        // const result = await RPC.handle({ path, body }, router, ctx)
        const result = await handle({ path, body }, ctx)
        console.log({ result })
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
