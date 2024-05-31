import { z } from 'zod'
import { isObject } from './util'
import type { ErrorMessage } from './types'

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

export interface Procedure<
  I extends z.ZodTypeAny,
  O extends z.ZodTypeAny,
  C,
  R,
> {
  $input: I
  $output: O
  $context: C
  action: Middleware<I, C, R>
  middlewares: Middleware<I, C, unknown>[]
  $procedure?: true
}

export function procedure() {
  return ProcedureBuilder.default()
}

export type Config<I extends z.ZodType, C> = I extends z.ZodUndefined
  ? { ctx: C }
  : { ctx: C; input: I['_output'] }

export type AnyConfig = { ctx: any; input?: any }

export type Middleware<I extends z.ZodType, C, R> = (opts: Config<I, C>) => R
export type AnyMiddleware = Middleware<any, any, any>

export interface Meta {
  title?: string
  desc?: string
}

interface Internals<I extends z.ZodType, O extends z.ZodType, C> {
  inputSchema: I
  outputSchema: O
  context: C
  meta: Meta
}

export class ProcedureBuilder<I extends z.ZodType, O extends z.ZodType, C> {
  #internals: Internals<I, O, C>
  #middlewares: Middleware<I, C, unknown>[] = []

  private constructor(internals: Internals<I, O, C>) {
    this.#internals = internals
  }

  static default<T>() {
    return new ProcedureBuilder(this.defaults<T>())
  }

  static withContext<T>(context: T) {
    return new ProcedureBuilder({ ...this.defaults(), context })
  }

  private static defaults<T>() {
    return {
      inputSchema: z.undefined(),
      outputSchema: z.undefined(),
      context: undefined as unknown as T,
      meta: {},
    }
  }

  meta(data: Meta): ProcedureBuilder<I, O, C> {
    this.#internals.meta = data
    return this
  }

  input<S extends z.ZodType>(schema: S): ProcedureBuilder<S, O, C> {
    this.#internals.inputSchema = schema as any
    return this as any
    // return new ProcedureBuilder({ ...this.#internals, inputSchema: schema })
  }

  output<S extends z.ZodType>(schema: S): ProcedureBuilder<I, S, C> {
    this.#internals.outputSchema = schema as any
    return this as any
    // return new ProcedureBuilder({ ...this.#internals, outputSchema: schema })
  }

  action<R extends O extends z.ZodUndefined ? any : O['_output']>(
    callback: Middleware<I, C, R>,
  ): Procedure<I, O, C, R> {
    this.#middlewares.push(callback)
    return {
      $input: this.#internals.inputSchema,
      $output: this.#internals.outputSchema,
      $context: this.#internals.context,
      middlewares: this.#middlewares,
      $procedure: true,
      action: callback,
    }
  }

  /**
   * Chain procedures to run in sequence and manage context.
   *
   * @param callback - A function which recieves the context from the previous
   *   procedure and returns the modified context or a new context.
   *
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
    this.#middlewares.push(callback)
    return this as any
  }
}

export function isProcedure(value: unknown): value is AnyProcedure {
  return isObject(value) && '$procedure' in value
}

type BuilderNoUse<I extends z.ZodType, O extends z.ZodType, C> = Omit<
  ProcedureBuilder<I, O, C>,
  'use'
>

// Use for type inference
export type AnyProcedure = Procedure<any, any, any, any>
export type AnyProcedureBuilder = ProcedureBuilder<any, any, any>

// Inference utils
export type ProcedureInput<T extends AnyProcedure> =
  T['$input']['_output'] extends undefined ? void : T['$input']['_output']

export type ProcedureOutput<T extends AnyProcedure> = ReturnType<T['action']>

export type ProcedureContext<T extends AnyProcedure> = T['$context']

export type ProcedureConfig<T extends AnyProcedure> = Config<
  T['$input'],
  T['$context']
>
// T extends Procedure<infer I, any, infer C, any>
//   ? Config<I, C>
//   : ErrorMessage<'Invalid procedure', T>

// exposed builder
// type ProcedureBuilder<
//   I extends z.ZodTypeAny = z.ZodUndefined,
//   O extends z.ZodTypeAny = z.ZodUndefined,
//   C = undefined,
//   TOmit extends string = never,
// > = Omit<$ProcedureBuilder<I, O, C>, '$internals' | 'next' | TOmit>