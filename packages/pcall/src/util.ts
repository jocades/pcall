import type { AnyFn, AnyObject } from './types'

export function isObj(value: unknown): value is Record<any, any> {
  return value !== null && typeof value === 'object'
}

export function isFn(value: unknown): value is Function {
  return typeof value === 'function'
}

export function merge<
  T extends AnyObject | undefined,
  U extends AnyObject | undefined,
>(a: T, b: U) {
  return { ...a, ...b }
}

export function randomKey(obj: Record<any, any>) {
  let keys = Object.keys(obj)
  return keys[Math.floor(Math.random() * keys.length)]
}

/**
 * Genarate a ~unique 12-character string.
 */
export function nanoid() {
  const ts = Date.now().toString(36)
  const rand = Math.random().toString(36).substring(2, 6)
  return ts + rand
}

export function bench<T extends AnyFn>(
  fn: T,
  times = 1,
): ReturnType<T> extends Promise<infer R>
  ? (...args: Parameters<T>) => Promise<void>
  : (...args: Parameters<T>) => void {
  const runs: number[] = []

  if (fn.constructor.name === 'AsyncFunction') {
    return (async (...args: Parameters<T>) => {
      for (let i = 0; i < times; i++) {
        let start = performance.now()
        await fn(...args)
        let elapsed = performance.now() - start
        runs.push(elapsed)
      }
      let total = runs.reduce((acc, curr) => acc + curr, 0)
      let avg = total / times
      logResult(fn.name, times, avg)
    }) as any
  }

  return ((...args: Parameters<T>) => {
    for (let i = 0; i < times; i++) {
      let start = performance.now()
      fn(...args)
      let elapsed = performance.now() - start
      runs.push(elapsed)
    }
    let total = runs.reduce((acc, curr) => acc + curr, 0)
    let avg = total / times
    logResult(fn.name, times, avg)
  }) as any
}

function logResult(name: string, times = 1, avg: number) {
  console.log(`${name} | runs: ${times} | avg: ${avg.toFixed(3)}ms`)
}

async function testAsync(max: number) {
  for (let i = 0; i < max; i++) {}
}

function testSync(max: number) {
  for (let i = 0; i < max; i++) {}
}

const MAX = 100e6
const rounds = 50

// await bench(testAsync, rounds)(10)
// bench(testSync, rounds)(MAX)

function pipe<T>(...fns: ((x: T, next: () => void) => void)[]) {
  return (x: Parameters<(typeof fns)[0]>[0]) => {
    let index = -1

    function dispatch(i: number) {
      if (i <= index) throw new Error('Cannot call next() multiple times')
      index = i
      let fn = fns[i]
      if (!fn) return
      fn(x, () => dispatch(i + 1))
    }

    dispatch(0)
  }
}

interface Ctx<E extends AnyObject> {
  x: number
  y?: string
  env: E
  get<K extends keyof E>(key: K): E[K]
  set<K extends keyof E>(key: K, value: E[K]): void
}

type Adder = (c: Ctx<{ user: string }>, next: () => void) => void

const add1: Adder = (c, next) => {
  console.log(c.x)
  const user = c.get('user')

  next()

  console.log('1 done', c)
}

const add2: Adder = (c, next) => {
  console.log(c.x + 1)
  next()
  c.y = 'hello'
  console.log('2 done', c)
}

const add3: Adder = (c, next) => {
  console.log(c.x + 2)
  next()
  console.log('3 done', c)
}

const c = {
  x: 1,
  env: {
    user: 'admin',
  },
  get(key) {
    return this.env[key]
  },
  set(key, value) {
    this.env[key] = value
  },
} satisfies Ctx<{ user: string }>

const chain = pipe(add1, add2, add3)
// chain(c)
