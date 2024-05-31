import { z } from 'zod'
import { error } from './error'
import { type FlatRouter, type Router } from './router'
import { handle as bunHandler } from '@/adapters/bun'
import type { AnyObject } from './types'

export interface RPCRequest {
  path: string
  body: unknown
}

export interface RPCResponse<T> {
  data: T
}

export function handle(req: RPCRequest, router: FlatRouter, ctx?: unknown) {
  const procedure = router.get(req.path)

  if (!procedure) {
    throw error('NOT_FOUND', `Path not found: ${req.path}`)
  }

  try {
    return procedure({ input: req.body, ctx })
  } catch (err: any) {
    throw error('INTERNAL_SERVER_ERROR', err.message)
  }
}

export interface ServeConfig {
  port?: number
  router: Router
  context?: AnyObject | ((req: Request) => AnyObject)
}

export function serve(config: ServeConfig) {
  const server = Bun.serve(bunHandler(config))
  console.log(`Listening on ${server.url}`)
  return server
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

export const res = {
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

export function parseInput(input: unknown, schema: z.ZodTypeAny) {
  if (!isZodSchema(schema) || isZodUndefined(schema)) {
    return input
  }
  const parsed = schema.safeParse(input)
  if (!parsed.success) {
    throw error('BAD_REQUEST', parsed.error.message)
  }
  return parsed.data
}

export function parseOutput(output: unknown, schema: z.ZodTypeAny) {
  if (!isZodSchema(schema) || isZodUndefined(schema)) {
    return output
  }
  const parsed = schema.safeParse(output)
  if (!parsed.success) {
    throw error('INTERNAL_SERVER_ERROR', parsed.error.message)
  }
  return parsed.data
}

export function isZodSchema(value: unknown): value is z.ZodTypeAny {
  return value instanceof z.ZodType
}

export function isZodUndefined(value: unknown): value is z.ZodUndefined {
  return value instanceof z.ZodUndefined
}
