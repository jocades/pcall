import { z } from 'zod'
import { RPCError, error } from './error'
import { type FlatRouter, type Router, flattenRouter, router } from './router'
import { Err, Ok, type Result } from './types'
import { ProcedureBuilder } from './procedure'

import type {
  AnyConfig,
  AnyMiddleware,
  AnyProcedure,
  Config,
} from '@/procedure'

export interface RPCRequest {
  path: string
  body: unknown
}

export interface RPCResponse<T> {
  data: T
}

class RPCBuilder<C> {
  context<T extends C>(): RPCBuilder<T> {
    return this as any
  }

  build(): RPC<C> {
    return new RPC()
  }
}

class RPC<C> {
  procedure = ProcedureBuilder.default<C>()
  router = router
}

function initRPC() {
  return new RPCBuilder()
}

function createContext() {
  return { userId: 1 }
}

type Context = ReturnType<typeof createContext>

const rpc = initRPC().context<Context>().build()

export function handle(req: RPCRequest, router: FlatRouter) {
  const procedure = router.get(req.path)

  if (!procedure) {
    return Err(error('NOT_FOUND', `Path not found: ${req.path}`))
  }

  try {
    return call(procedure, { input: req.body, ctx: undefined })
  } catch (err: any) {
    return Err(error('INTERNAL_SERVER_ERROR', err.message))
  }
}

function call(procedure: AnyProcedure, { input, ctx }: AnyConfig) {
  input = parseInput(input, procedure.$input)

  const dispatch = pipe(procedure.middlewares)
  const result = dispatch({ input, ctx })

  return parseOutput(result, procedure.$output)
}

function pipe<T extends AnyConfig>(middlewares: AnyMiddleware[]) {
  // return function dispatch(opts: T) {
  //   return middlewares.reduce((acc, fn) => fn(acc), opts)
  // }
  return function dispatch(opts: T) {
    let i = 0
    for (; i < middlewares.length; i++) {
      if (i == middlewares.length - 1) break
      opts.ctx = middlewares[i](opts)
    }
    return middlewares[i](opts)
  }
}

function parseInput(input: unknown, schema: z.ZodTypeAny) {
  if (!isZodSchema(schema) || isZodUndefined(schema)) {
    return input
  }
  const parsed = schema.safeParse(input)
  if (!parsed.success) {
    throw new Error(`Invalid input: ${parsed.error.message}`)
  }
  return parsed.data
}

function parseOutput(output: unknown, schema: z.ZodTypeAny) {
  if (!isZodSchema(schema) || isZodUndefined(schema)) {
    return output
  }
  const parsed = schema.safeParse(output)
  if (!parsed.success) {
    throw new Error(`Invalid output: ${parsed.error.message}`)
  }
  return parsed.data
}

function isZodSchema(value: unknown): value is z.ZodTypeAny {
  return value instanceof z.ZodType
}

function isZodUndefined(value: unknown): value is z.ZodUndefined {
  return value instanceof z.ZodUndefined
}
