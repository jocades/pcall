export function createRecursiveProxy<T>(
  callback: (path: string[], args: unknown[]) => unknown,
  path: string[],
) {
  const proxy: unknown = new Proxy(() => {}, {
    get(_targ, key) {
      console.log('proxy get', key)
      if (typeof key !== 'string' || key === 'then') {
        return undefined
      }
      return createRecursiveProxy(callback, [...path, key])
    },
    apply(_targ, _thisArg, args) {
      console.log('proxy apply', args)
      const isApply = path[path.length - 1] === 'apply'
      return callback(
        isApply ? path.slice(0, -1) : path,
        isApply ? (args.length >= 2 ? args[1] : []) : args,
      )
    },
  })

  return proxy as T
}
