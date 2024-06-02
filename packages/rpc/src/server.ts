import { z } from 'zod'
import { error, type RPCErrorStatus } from './error'
import { type FlatRouter, type Router } from './router'
import { handle as bunHandler } from './adapters/bun'
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
    return procedure(req.body)
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
  return Bun.serve(bunHandler(config))
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

export function parse<T>(
  data: T,
  schema: undefined | z.ZodTypeAny,
  status: RPCErrorStatus
) {
  if (!schema) {
    return data
  }

  const parsed = schema.safeParse(data)

  if (!parsed.success) {
    throw error(status, parsed.error.message)
  }

  return parsed.data
}

export function parseInput<I>(input: I, schema: undefined | z.ZodTypeAny) {
  return parse(input, schema, 'BAD_REQUEST')
}

export function parseOutput<O>(output: O, schema: undefined | z.ZodTypeAny) {
  return parse(output, schema, 'INTERNAL_SERVER_ERROR')
}

export function isZodSchema(value: unknown): value is z.ZodTypeAny {
  return value instanceof z.ZodType
}
