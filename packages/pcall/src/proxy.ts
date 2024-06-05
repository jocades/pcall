export function createProxy<T>(
  callback: (path: string[], args: unknown[]) => unknown,
  path: string[] = [],
): T {
  return new Proxy(() => {}, {
    get(_targ, key) {
      if (typeof key !== 'string' || key === 'then') {
        return undefined
      }
      return createProxy(callback, [...path, key])
    },
    apply(_targ, _thisArg, args) {
      const isApply = path[path.length - 1] === 'apply'
      return callback(
        isApply ? path.slice(0, -1) : path,
        isApply ? (args.length >= 2 ? args[1] : []) : args,
      )
    },
  }) as unknown as T
}
