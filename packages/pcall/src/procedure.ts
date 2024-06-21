import { isFn, isObj } from './util'
import type { AnyFn, MaybePromise } from './types'
import { z } from 'zod'
import { error, type RPCErrorStatus } from './error'

/**
 * @module Procedure
 *
 * Type Map:
 * I -> Input
 * O -> Output
 * C -> Context
 * S -> Schema
 * R -> Return Type
 */

export interface Procedure<I, O> {
  $input: Parse<I>
  $output: O
  $procedure: true
  (input: ParseInput<I>, env?: unknown): Promise<O>
}

export function procedure<C>() {
  return Builder.default<C>()
}

export type Schema = Record<string, z.ZodType> | z.ZodType

export type Middleware<I, O, C> = (c: Context<I, C>) => O

export type Context<I, E> = I extends undefined
  ? { env: E }
  : { env: E; input: Parse<I> }

/** @internal */
interface Internals<I, O, E> {
  input: I
  output: O
  env: E
}

class Chain<T extends AnyFn = AnyFn> extends Array<T> {
  pipe(resolver: T) {
    return async (c: AnyContext) => {
      for (const mw of this) c.env = await mw(c)
      return resolver(c)
    }
  }
}

export class Builder<I, O, C> {
  private internals: AnyInternals
  private middlewares: Chain

  private constructor(
    context: Internals<I, O, C>,
    middlewares: Chain = new Chain(),
  ) {
    this.internals = context
    this.middlewares = middlewares
  }

  static default<T>() {
    return new Builder({
      input: undefined,
      output: undefined,
      env: undefined as T,
    })
  }

  input<S extends Schema>(schema: S) {
    return new Builder(
      { ...this.internals, input: this.getSchema(schema) },
      this.middlewares,
    ) as Builder<S, O, C>
  }

  output<S extends Schema>(schema: S): Builder<I, S, C> {
    return new Builder(
      { ...this.internals, output: this.getSchema(schema) },
      this.middlewares,
    )
  }

  use<R>(middleware: Middleware<I, MaybePromise<R>, C>): Builder<I, O, R> {
    this.middlewares.push(middleware)
    return new Builder(this.internals, this.middlewares)
  }

  action<R extends O extends undefined ? any : Parse<O>>(
    resolver: Middleware<I, MaybePromise<R>, C>,
  ) {
    return Object.assign(
      async (input: Parse<I>, env?: unknown) => {
        const context = {
          env,
          input: parseInput(input, this.internals.input),
        }

        const dispatch = this.middlewares.pipe(resolver)
        const result = await dispatch(context)

        return parseOutput(result, this.internals.output)
      },
      {
        $input: this.internals.input,
        $output: this.internals.output,
        $procedure: true,
      },
    ) as Procedure<I, R>
  }

  private getSchema<S extends Schema>(schema: S) {
    return !isZodSchema(schema) && isObj(schema) ? z.object(schema) : schema
  }
}

export function parse<T>(
  data: unknown,
  schema: undefined | z.ZodType,
  status: RPCErrorStatus,
) {
  if (!schema) {
    return data
  }

  const parsed = schema.safeParse(data)

  if (!parsed.success) {
    throw error(status, parsed.error.message)
  }

  return parsed.data as T
}

export function parseInput<I>(input: I, schema: undefined | z.ZodTypeAny) {
  return parse(input, schema, 'INPUT_PARSE_ERROR')
}

export function parseOutput<O>(output: O, schema: undefined | z.ZodTypeAny) {
  return parse(output, schema, 'OUTPUT_PARSE_ERROR')
}

export function isZodSchema(value: unknown): value is z.ZodTypeAny {
  return value instanceof z.ZodType
}

export function isProcedure(value: unknown): value is AnyProcedure {
  return isFn(value) && '$procedure' in value
}

export type Parse<T> = T extends z.ZodType
  ? T['_output']
  : T extends Record<string, z.ZodType>
    ? z.ZodObject<T>['_output']
    : Expected<z.ZodType, T>

export type ParseInput<T> = T extends z.ZodType
  ? T['_input']
  : T extends Record<string, z.ZodType>
    ? z.ZodObject<T>['_input']
    : T extends undefined
      ? void
      : Expected<z.ZodType, T>

export type AnyContext = Context<any, any>
export type AnyInternals = Internals<any, any, any>
export type AnyProcedure = Procedure<any, any>

type Expected<TExp, TGot> = {
  exp: TExp
  got: TGot
}

const inObj = { a: z.number() }
const inZod = z.number()
const inZodObj = z.object({ a: z.string() })

const nested = {
  a: z.number(),
  b: z.object({
    c: z.string(),
  }),
}

type InObj = Parse<typeof inObj>
type Nested = Parse<typeof nested>
type InZod = Parse<typeof inZod>
type InZodObj = Parse<typeof inZodObj>

// i want to be able to merge the inputs as the user goes .input({ a: z.number() }).input({ b: z.string()
// -> input = { a: number, b: string }
// instead of overwriting the input

type One = { a: z.ZodNumber }
type Two = { b: z.ZodString }

interface Ext extends One, Two {}
type Inter = One & Two

type What<T> = T extends Record<string, any> ? true : false
type Why<T> = T extends Record<string, z.ZodType> ? true : false

type X = What<Ext>
type Y = What<Inter>

type W = Why<Ext>
type Z = Why<Inter>

type NotWorks = Parse<Ext>
type Works = Parse<Inter>

// Works with intersection types!

// merging schemas
const one = { a: z.number() }
const two = { b: z.string() }

// works as expected
type Merged = Parse<typeof one & typeof two>

const s1 = z.object({ b: z.number() })
const s2 = z.object({ b: z.number() })

// weird can have two keys with the same name
type MergedZod = Parse<typeof s1 & typeof s2>
