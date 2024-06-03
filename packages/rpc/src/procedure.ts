import { isObj } from './util'
import type { AnyFn, MaybePromise } from './types'
import { z } from 'zod'
import { error, type RPCErrorStatus } from './error'

/**
 * @module Procedure
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
  (input: ParseInput<I>, ctx?: unknown): Promise<O>
}

export function procedure<C>() {
  return Builder.default<C>()
}

export type Schema = Record<string, z.ZodType> | z.ZodType

export type Middleware<I, O, C> = (c: Config<I, C>) => O

export type Config<I, C> = I extends undefined
  ? { ctx: C }
  : { ctx: C; input: Parse<I> }

/** @internal */
interface Internals<I, O, C> {
  input: I
  output: O
  context: C
}

class Chain<T extends AnyFn> extends Array<T> {
  pipe(resolver: T) {
    return async (c: AnyConfig) => {
      for (const mw of this) c.ctx = await mw(c)
      return resolver(c)
    }
  }
}

export class Builder<I, O, C> {
  private internals: AnyInternals
  private middlewares = new Chain()

  private constructor(config: Internals<I, O, C>) {
    this.internals = config
  }

  static default<T>() {
    return new Builder({
      input: undefined,
      output: undefined,
      context: undefined as T,
    })
  }

  input<S extends Schema>(schema: S): Builder<S, O, C> {
    if (!isZodSchema(schema) && isObj(schema)) {
      this.internals.input = z.object(schema)
    } else {
      this.internals.input = schema
    }
    return this as any
  }

  output<S extends Schema>(schema: S): Builder<I, S, C> {
    if (!isZodSchema(schema) && isObj(schema)) {
      this.internals.output = z.object(schema)
    } else {
      this.internals.output = schema
    }
    return this
  }

  action<R extends O extends undefined ? any : Parse<O>>(
    resolver: Middleware<I, MaybePromise<R>, C>
  ): Procedure<I, R> {
    return Object.assign(async (input: Parse<I>, ctx?: unknown) => {
      const config = {
        ctx,
        input: parseInput(input, this.internals.input),
      }

      const dispatch = this.middlewares.pipe(resolver)
      const result = await dispatch(config)

      return parseOutput(result, this.internals.output)
    })
  }

  use<R>(middleware: Middleware<I, MaybePromise<R>, C>): Builder<I, O, R> {
    this.middlewares.push(middleware)
    return this as any
  }
}

export function parse<T>(
  data: T,
  schema: undefined | z.ZodType,
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

export type Parse<T> = T extends z.ZodType
  ? T['_output']
  : T extends Record<string, z.ZodType>
  ? z.ZodObject<T>['_output']
  : Expected<z.ZodType, T>

export type ParseInput<T> = T extends z.ZodType
  ? T['_input']
  : T extends Record<string, z.ZodType>
  ? z.ZodObject<T>['_input']
  : Expected<z.ZodType, T>

export type AnyConfig = Config<any, any>
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
