import type { AnyProcedure, ProcedureInput, ProcedureOutput } from './procedure'
import type { Router } from './router'

export type Maybe<T> = T | undefined

export type MaybePromise<T> = T | Promise<T>

/** Infer the return type of a function which return a promise or not */
export type Use<T extends (...args: any[]) => MaybePromise<any>> =
  ReturnType<T> extends Promise<infer R> ? R : ReturnType<T>

export namespace rpc {
  export type infer<T extends Router> = {
    [K in keyof T]: T[K] extends Router
      ? rpc.infer<T[K]>
      : T[K] extends AnyProcedure
        ? DecorateCaller<T[K]>
        : ErrorMessage<'Invalid route definition', T[K]>
  }

  export type DecorateCaller<T extends AnyProcedure> = {
    exec(input: ProcedureInput<T>): ProcedureOutput<T>
  }
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
