import { z } from 'zod'
import { parseInput, parseOutput } from '@/server'

/**
 * @module Procedure
 * Type Map:
 * I -> Input Schema
 * O -> Output Schema
 * C -> Context
 * R -> Return Type
 * S -> Schema
 * F -> Function
 */

export interface Procedure<I, O, C> {
  $input: I
  $output: O
  // $context: C
  $procedure?: true
  meta: Meta
  (opts: AnyConfig): unknown
}

export function procedure() {
  return ProcedureBuilder.default()
}

export type Config<I extends z.ZodType, C> = I extends z.ZodUndefined
  ? { ctx: C }
  : { ctx: C; input: I['_output'] }

export type Middleware<I extends z.ZodType, C, R> = (opts: Config<I, C>) => R

export interface Meta {
  description?: string
}

/** @internal */
interface Internals<I extends z.ZodType, O extends z.ZodType, C> {
  input: I
  output: O
  context: C
  meta: Meta
}

/**
 * @internal Do not expose this function. Core implementation of the procedure.
 */
function createProcedure<I extends z.ZodType, O extends z.ZodType, C>(
  internals: Internals<I, O, C>,
  middlewares: Chain<AnyMiddleware>,
  resolver: Middleware<I, C, O['_output']>,
): Procedure<I, O['_output'], C> {
  /**
   * @description The actual implementation.
   */
  function call({ input, ctx }: AnyConfig) {
    input = parseInput(input, internals.input)

    // @ts-expect-error TODO: Fix type
    const dispatch = middlewares.pipe(resolver)
    const result = dispatch({ input, ctx })

    return parseOutput(result, internals.output)
  }

  return Object.assign(call, {
    $input: internals.input,
    $output: internals.output,
    $procedure: true as const,
    meta: internals.meta,
  })
}

class Chain<T extends AnyMiddleware> extends Array<T> {
  pipe(resolver: T) {
    return (opts: AnyConfig) => {
      for (const middleware of this) {
        opts.ctx = middleware(opts)
      }
      return resolver(opts)
    }
  }
}

export class ProcedureBuilder<I extends z.ZodType, O extends z.ZodType, C> {
  #internals: Internals<I, O, C>
  #middlewares = new Chain()

  private constructor(internals: Internals<I, O, C>) {
    this.#internals = internals
  }

  static default<T>() {
    return new ProcedureBuilder({
      input: z.undefined(),
      output: z.undefined(),
      context: undefined as T,
      meta: {},
    })
  }

  meta(data: Meta): ProcedureBuilder<I, O, C> {
    this.#internals.meta = data
    return this
  }

  input<S extends z.ZodType>(schema: S): ProcedureBuilder<S, O, C> {
    this.#internals.input = schema as any
    return this as any
    // return new ProcedureBuilder({ ...this.#internals, inputSchema: schema })
  }

  output<S extends z.ZodType>(schema: S): ProcedureBuilder<I, S, C> {
    this.#internals.output = schema as any
    return this as any
    // return new ProcedureBuilder({ ...this.#internals, outputSchema: schema })
  }

  action<R extends O extends z.ZodUndefined ? any : O['_output']>(
    resolver: Middleware<I, C, R>,
  ): Procedure<I, R, C> {
    return createProcedure(this.#internals, this.#middlewares, resolver)
  }

  /**
   * Chain procedures to run in sequence and manage context.
   *
   * @param callback - A function which recieves the context from the previous
   *   procedure and returns the modified context or a new context.
   * @example
   * ```ts
   * procedure()
   *   .use((ctx) => {
   *     const session = getSession()
   *     return { userId: session.userId }
   *   })
   *   .action(({ ctx }) => {
   *   })
   *  ```
   */
  use<R>(callback: Middleware<I, C, R>): ProcedureBuilder<I, O, R> {
    // TODO: Fix type
    this.#middlewares.push(callback as AnyMiddleware)
    return this as any
  }
}

export function isProcedure(value: unknown): value is AnyProcedure {
  return typeof value === 'function' && '$procedure' in value
}

// Inference utils
export type ProcedureInput<T extends AnyProcedure> =
  T['$input']['_output'] extends undefined ? void : T['$input']['_output']

export type ProcedureOutput<T extends AnyProcedure> = T['$output']

// export type ProcedureContext<T extends AnyProcedure> = T['$context']

// export type ProcedureConfig<T extends AnyProcedure> = Config<
//   T['$input'],
//   T['$context']
// >

// Use for type inference
export type AnyProcedure = Procedure<any, any, any>
export type AnyProcedureBuilder = ProcedureBuilder<any, any, any>
export type AnyConfig = { ctx: any; input: any }
export type AnyMiddleware = (opts: AnyConfig) => any
