import { createProxy } from './proxy'
import { type Router } from './router'
import { type RPCResponse } from './rpc'
import { type rpc } from './types'

const baseURL = 'http://localhost:3000/api'

// const resolver: {
// [K in keyof rpc.DecorateCall<any>]: any
// } = {
const resolver = {
  exec: async (url: URL, args: any[]) => {
    if (args[0]) {
      url.searchParams.set('input', JSON.stringify(args[0]))
    }

    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    return ((await res.json()) as RPCResponse<any>).data
  },
  useMutation: () => {
    return {
      mutate: async (url: string, args: any[]) => {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(args),
        })
        return ((await res.json()) as RPCResponse<any>).data
      },
      isPending: false,
      error: null,
    }
  },
}

export type Resolver = typeof resolver

export function createClient<T extends Router>() {
  return createProxy((path, args) => {
    // const url = `${baseURL}?path=${path.slice(0, -1).join('.')}`
    const url = new URL(baseURL)

    url.searchParams.set('path', path.slice(0, -1).join('.'))

    // console.log('proxy callback', url, args)

    const method = path[path.length - 1] as keyof typeof resolver

    return resolver[method](url, args)
  }, []) as rpc.DecorateClient<T>
}
