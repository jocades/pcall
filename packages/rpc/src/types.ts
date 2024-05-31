import type { AnyProcedure, ProcedureInput, ProcedureOutput } from './procedure'
import type { Router, RouterDef } from './router'

export type AnyObject = Record<string, any>

export type AnyFn = (...args: any[]) => any

export type AnyPromiseFn<T = any> = (...args: any[]) => Promise<T>

export type Maybe<T> = T | undefined

export type MaybePromise<T> = T | Promise<T>

export type Unwrap<T> = T extends Promise<infer R> ? R : T

/** Infer the return type of a function which may return a promise */
export type Use<T extends (...args: any[]) => MaybePromise<any>> = Unwrap<
  ReturnType<T>
>

export type DecorateCaller<T extends RouterDef> = {
  [K in keyof T]: T[K] extends Router
    ? DecorateCaller<T[K]['$def']>
    : T[K] extends AnyProcedure
      ? (input: ProcedureInput<T[K]>) => MaybePromise<ProcedureOutput<T[K]>>
      : ErrorMessage<'Invalid route definition', T[K]>
}

export type DecorateReactClient<T extends RouterDef> = {
  [K in keyof T]: T[K] extends Router
    ? DecorateReactClient<T[K]['$def']>
    : T[K] extends AnyProcedure
      ? DecorateReactCall<T[K]>
      : ErrorMessage<'Invalid route definition', T[K]>
}

type DecorateReactCall<T extends AnyProcedure> = {
  exec(input: ProcedureInput<T>): ProcedureOutput<T>
}

/** @internal */
export type ErrorMessage<TMsg extends string, TDbg = undefined> = {
  msg: TMsg
  dbg: TDbg
}

export type Ok<T> = { ok: true; value: T }
export type Err<E> = { ok: false; error: E }

export type Result<T, E> = Ok<T> | Err<E>

export function Ok<T>(value: T): Ok<T> {
  return { ok: true, value }
}

export function Err<E>(error: E): Err<E> {
  return { ok: false, error }
}

export function isOk<T, E>(result: Result<T, E>): result is Ok<T> {
  return result.ok
}

export function isErr<T, E>(result: Result<T, E>): result is Err<E> {
  return !result.ok
}
