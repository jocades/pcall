function active(key: string) {
  return process.env[key] === '1' || process.env[key] === 'true'
}

export const Env = Object.freeze({
  DEV: process.env.NODE_ENV === 'development',
  PROD: process.env.NODE_ENV === 'production',
  TEST: process.env.NODE_ENV === 'test',
  DEBUG: active('DEBUG'),

  active,
  get: (key: string) => process.env[key],
})
