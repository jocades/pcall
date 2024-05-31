import type { AppRouter } from '../test/router.test'
import { createProxy } from './proxy'
import { type Router } from './router'
import { type DecorateCaller } from './types'

// const url = new URL('http://localhost:8000')

async function _fetch(url: URL, body: unknown) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })

  return res.json()
}

export interface ClientConfig {
  url: string
}

export function client<T extends Router>(config: ClientConfig) {
  const url = new URL(config.url)

  return createProxy<DecorateCaller<T['$def']>>((path, args) => {
    url.searchParams.set('p', path.join('.'))
    return _fetch(url, args[0])
  })
}

const api = client<AppRouter>({
  url: 'http://localhost:8000',
})

const r1 = await api.users.getById({ id: 1 })
