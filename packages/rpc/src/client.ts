import { createProxy } from './proxy'
import { type Router } from './router'
import { type DecorateCaller } from './types'

async function _fetch(url: string, body: unknown) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })

  return res.json()
}

export interface ClientConfig {
  url: string
}

export function client<T extends Router>(config: ClientConfig) {
  // const url = new URL(config.url)

  return createProxy<DecorateCaller<T['$def']>>((path, args) => {
    // url.searchParams.set('p', path.join('.'))
    const url = config.url + '?p=' + path.join('.')
    return _fetch(url, args[0])
  })
}
