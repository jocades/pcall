#!/usr/bin/env -S bun run

const dev = process.env.NODE_ENV !== 'production'

export function build() {
  return Bun.build({
    entrypoints: ['./src/index.tsx'],
    outdir: './dist',
    naming: `[dir]/${dev ? 'bundle' : 'bundle.min'}.[ext]`,
    minify: !dev,
  })
}

export async function main() {
  const result = await build()

  if (!result.success) {
    console.error('Build failed')
    for (const message of result.logs) {
      console.error(message)
    }
    return
  }
  console.log('Build succeeded')
}

if (import.meta.main) {
  await main()
}
