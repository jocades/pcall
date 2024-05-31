import { z } from 'zod'
import { error } from './error'
import { type FlatRouter, router } from './router'
import { Err } from './types'
import { ProcedureBuilder } from './procedure'

export interface RPCRequest {
  path: string
  body: unknown
}

export interface RPCResponse<T> {
  data: T
}

export class RPC<C> {
  router = router

  get procedure() {
    return ProcedureBuilder.default<C>()
  }

  static handle(req: RPCRequest, router: FlatRouter, ctx?: unknown) {
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
}

class RPCBuilder<C> {
  context<T extends C>(): RPCBuilder<T> {
    return this as any
  }

  build(): RPC<C> {
    return new RPC()
  }
}

export function initRPC() {
  return new RPCBuilder()
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
