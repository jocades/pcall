const staticDir = `${__dirname}/../static`

export async function build() {
  console.log('Building...')
  const result = await Bun.build({
    entrypoints: [`${staticDir}/main.ts`],
    outdir: staticDir,
    naming: `[dir]/bundle.[ext]`,
  })

  if (!result.success) {
    for (const message of result.logs) {
      console.error(message)
    }
    throw new Error('Build failed')
  }
}
