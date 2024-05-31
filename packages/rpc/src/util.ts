export function isObject(value: unknown): value is Record<any, any> {
  return value !== null && typeof value === 'object'
}

export function randomKey(obj: Record<any, any>) {
  let keys = Object.keys(obj)
  let len = keys.length
  return keys[Math.floor(Math.random() * len)]
}

interface Procedure {
  input: unknown
  output: unknown
  (): any
}

function x() {}

const procedure = Object.assign((id: number) => null, {
  input: 'hello',
  output: undefined,
})

procedure()
console.log(procedure.input)

function memoize(fn: Procedure) {
  let cache = new Map()

  return function () {
    console.log(arguments)
    let key = JSON.stringify(arguments)
    if (cache.has(key)) {
      return cache.get(key)
    }

    let result = fn()
    cache.set(key, result)
    return result
  }
}

let memoized = memoize(procedure)
