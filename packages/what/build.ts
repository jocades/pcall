async function build() {
  const result = await Bun.build({
    entrypoints: ['./app.tsx'],
    outdir: './dist',
    naming: `[dir]/bundle.[ext]`,
  })

  if (!result.success) {
    for (const message of result.logs) {
      console.error(message)
    }
    throw new Error('Build failed')
  }
}

await build()
