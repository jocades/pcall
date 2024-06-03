import { type Router } from './router'
import { handle } from './adapters/bun'
import type { AnyObject, MaybePromise } from './types'

export interface ServeConfig {
  port?: number
  router: Router
  context?: AnyObject | ((req: Request) => MaybePromise<AnyObject>)
}

export function serve(config: ServeConfig) {
  return Bun.serve(handle(config))
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

export function cors() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export const res = {
  json(data: unknown, status = 200) {
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json', ...cors() },
      status,
    })
  },
  text(data: string, status = 200) {
    return new Response(data, {
      headers: { 'Content-Type': 'text/plain', ...cors() },
      status,
    })
  },
}
