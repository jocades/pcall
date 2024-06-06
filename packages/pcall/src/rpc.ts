import { router } from './router'
import { Builder } from './procedure'
import type { RPCError } from './error'
import { nanoid } from './util'

/**
 * @module RPC
 *
 * JSON-RPC 2.0 protocol.
 * @see https://www.jsonrpc.org/specification
 */

export class RPCRequest {
  readonly id: number
  readonly jsonrpc = '2.0'
  method: string
  params?: unknown

  constructor(id: number, method: string, params?: unknown) {
    this.id = id
    this.method = method
    this.params = params
  }
}

export class RPCResponse {
  readonly id: number
  readonly jsonrpc = '2.0'
  result: unknown
  error?: RPCError

  constructor(id: number, result: unknown, error?: RPCError) {
    this.id = id
    this.result = result
    this.error = error
  }
}

export function initRPC<C>() {
  return {
    router,
    procedure: () => Builder.default<C>(),
  }
}
