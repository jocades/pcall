#!/usr/bin/env -S bun run

const dev = process.env.NODE_ENV !== 'production'

function build() {
  return Bun.build({
    entrypoints: ['./src/index.tsx'],
    outdir: './dist',
    naming: `[dir]/${dev ? 'bundle' : 'bundle.min'}.[ext]`,
    minify: !dev,
  })
}

if (import.meta.main) {
  const result = await build()

  if (!result.success) {
    console.error('Build failed')
    for (const message of result.logs) {
      console.error(message)
    }
  }
}
