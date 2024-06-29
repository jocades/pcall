function active(key: string) {
  return process.env[key] === '1' || process.env[key] === 'true'
}

const { NODE_ENV } = process.env

export const Env = Object.freeze({
  DEV: NODE_ENV === 'development',
  PROD: NODE_ENV === 'production',
  TEST: NODE_ENV === 'test',
  DEBUG: active('DEBUG'),

  active,
  get: (key: string) => process.env[key],
})
