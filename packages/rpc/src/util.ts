export function isObject(value: unknown): value is Record<any, any> {
  return value !== null && typeof value === 'object'
}

export function randomKey(obj: Record<any, any>) {
  let keys = Object.keys(obj)
  let len = keys.length
  return keys[Math.floor(Math.random() * len)]
}
