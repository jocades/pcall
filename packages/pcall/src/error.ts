export function error(status: RPCErrorStatus, message?: string): RPCError {
  return new RPCError(status, message)
}

export class RPCError {
  name = 'RPCError'
  status: RPCErrorStatus
  code: RPCErrorCode
  message?: string

  constructor(status: RPCErrorStatus, message?: string) {
    this.status = status
    this.code = RPC_ERROR_CODES_BY_STATUS[status]
    this.message = message
  }

  toJSON() {
    return {
      code: this.code,
      status: this.status,
      message: this.message,
    }
  }
}

export const RPC_ERROR_CODES_BY_STATUS = {
  /**
   * Invalid JSON was received by the server.
   * An error occurred on the server while parsing the JSON text.
   */
  PARSE_ERROR: 418,
  INPUT_PARSE_ERROR: 418,
  OUTPUT_PARSE_ERROR: 418,
  /**
   * The JSON sent is not a valid Request object.
   */
  BAD_REQUEST: 400,

  // Internal JSON-RPC error
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,

  // Implementation specific errors
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_SUPPORTED: 405,
  TIMEOUT: 408,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
} as const

export type RPCErrorStatus = keyof typeof RPC_ERROR_CODES_BY_STATUS
export type RPCErrorCode = (typeof RPC_ERROR_CODES_BY_STATUS)[RPCErrorStatus]
