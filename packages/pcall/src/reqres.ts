import { RPCError } from './error'
import { RPCResponse } from './rpc'

const data = { x: 1 }
const a = Response.json(data)
const b = new Response(JSON.stringify(data), {
  headers: { 'Content-Type': 'application/json' },
})

// console.log(a)
// console.log(b)

const out = Response.json(
  new RPCResponse(
    1,
    undefined,
    new RPCError('PARSE_ERROR', 'Input parser broken motherfucker'),
  ),
)

// console.log(out)

const json: RPCResponse = await out.json()
console.log(json)
