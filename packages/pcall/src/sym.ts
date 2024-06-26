import { isObj } from './util'

const $router = Symbol('router')

export const what = {
  [$router]: true,
  fetch: (req: Request) => new Response('Hello World!'),
}

function isRouter(value: unknown): value is typeof what {
  return isObj(value) && $router in value
}
