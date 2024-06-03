import type { Router, RouterDef } from './router'
import type { Parse, Procedure } from './procedure'

export type AnyObject<T = any> = Record<string, T>

export type AnyFn<R = any> = (...args: any[]) => R

export type MaybePromise<T = any> = T | Promise<T>

export type Unwrap<T> = T extends Promise<infer R> ? R : T

export type Use<T extends AnyFn<MaybePromise>> = Unwrap<ReturnType<T>>

export type DecorateCaller<T extends RouterDef> = {
  [K in keyof T]: T[K] extends Router
    ? DecorateCaller<T[K]['$def']>
    : T[K] extends Procedure<infer I, infer O>
      ? (input: I extends undefined ? void : Parse<I>) => O
      : ErrorMessage<'Invalid route definition', T[K]>
}

/** @internal */
export type ErrorMessage<TMsg extends string, TDbg = undefined> = {
  msg: TMsg
  dbg: TDbg
}
