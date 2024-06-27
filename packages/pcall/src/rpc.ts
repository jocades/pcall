import { router } from './router'
import { Builder } from './procedure'
import { RPCError, error } from './error'

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

  static async from<R, T extends { json(): R } = any>(what: T) {
    try {
      return (await what.json()) as R extends [] ? RPCRequest[] : RPCRequest
    } catch (err) {
      if (err instanceof SyntaxError) {
        throw error('PARSE_ERROR')
      }
      throw err
    }
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

  static send(id: number, result: unknown, error?: RPCError) {
    return Response.json(new RPCResponse(id, result, error))
  }

  /**
   * Check for an RPCError.
   * @throws If the error does not match.
   * @returns RPCResponse without result with error.
   */
  static error(id: number, err: any) {
    if (!(err instanceof RPCError)) {
      throw err
    }
    return new RPCResponse(id, undefined, err)
  }

  static async from<R, T extends { json(): R } = any>(what: T) {
    try {
      return (await what.json()) as R extends [] ? RPCResponse[] : RPCResponse
    } catch (err) {
      if (err instanceof SyntaxError) {
        throw error('PARSE_ERROR')
      }
      throw err
    }
  }
}

export function initRPC<C>() {
  return {
    router,
    procedure: () => Builder.default<C>(),
  }
}
