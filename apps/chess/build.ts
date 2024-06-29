export async function build() {
  const dev = process.env.NODE_ENV !== 'production'

  const result = await Bun.build({
    entrypoints: ['./src/main.tsx'],
    outdir: './static',
    naming: `[dir]/${dev ? 'bundle' : 'bundle.min'}.[ext]`,
    minify: !dev,
  })

  if (!result.success) {
    for (const message of result.logs) {
      console.error(message)
    }
    throw new Error('Build failed')
  }
}

if (import.meta.main) {
  await build()
}
