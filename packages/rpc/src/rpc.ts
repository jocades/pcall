import { z } from 'zod'
import { RPCError, error } from './error'
import { type FlatRouter, type Router, flattenRouter, router } from './router'
import { Err, Ok, type Result } from './types'
import { ProcedureBuilder } from './procedure'

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

export function handle(
  req: RPCRequest,
  router: FlatRouter,
): Result<unknown, RPCError> {
  const proc = router.get(req.path)
  if (!proc) return Err(error('NOT_FOUND', `Path not found: ${req.path}`))

  console.log('---MW---', proc.middlewares.size)

  if (proc.middlewares.size > 0) {
    for (let mw of proc.middlewares) {
      console.log('running middleware')
      proc.$context = mw(proc.$context)
    }
  }

  let result

  if (!isZodSchema(proc.$input) || isZodUndefined(proc.$input)) {
    result = proc.action({ ctx: proc.$context })
  } else {
    const input = proc.$input.safeParse(req.body)

    if (!input.success) {
      return Err(error('BAD_REQUEST', `Invalid input: ${input.error.message}`))
    }

    result = proc.action({ input: input.data, ctx: proc.$context })
  }

  if (!isZodSchema(proc.$output) || isZodUndefined(proc.$output)) {
    return Ok(result)
  }

  const output = proc.$output.safeParse(result)

  if (!output.success) {
    return Err(
      error('INTERNAL_SERVER_ERROR', `Invalid output: ${output.error.message}`),
    )
  }

  return Ok(output.data)
}

function isZodSchema(value: unknown): value is z.ZodTypeAny {
  return value instanceof z.ZodType
}

function isZodUndefined(value: unknown): value is z.ZodUndefined {
  return value instanceof z.ZodUndefined
}
