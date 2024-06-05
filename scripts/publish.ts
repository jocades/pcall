import { $ } from 'bun'

function ask(q: string) {
  return prompt(`${q} (y/n)`) === 'y'
}

async function publish(src: string) {
  if (!ask(`Publish ${src}?`)) {
    process.exit(0)
  }

  const pkg = await Bun.file(`${src}/package.json`).json()

  console.log(`Current version: ${pkg.version}`)

  const v = prompt('New Version? (M/m/p)')

  if (!v || !['M', 'm', 'p'].includes(v)) {
    console.error(`Invalid version: ${v}`)
    process.exit(1)
  }

  if (v === 'M') {
    const major = parseInt(pkg.version.split('.')[0]) + 1
    pkg.version = `${major}.0.0`
  }

  if (v === 'm') {
    const minor = parseInt(pkg.version.split('.')[1]) + 1
    pkg.version = `${pkg.version.split('.')[0]}.${minor}.0`
  }

  if (v === 'p') {
    const patch = parseInt(pkg.version.split('.')[2]) + 1
    pkg.version = `${pkg.version.split('.')[0]}.${pkg.version.split('.')[1]}.${patch}`
  }

  if (!ask(`Publish version ${pkg.version}?`)) {
    process.exit(0)
  }

  for (let file of [`${src}/package.json`, `${src}/dist/package.json`]) {
    await Bun.write(file, JSON.stringify(pkg, null, 2))
  }

  $.cwd(src)

  await $`npm publish --access public`.cwd('dist')

  if (ask('Cleanup?')) {
    await $`rm -rf dist`
  }
}

if (import.meta.main) {
  const path = process.argv[2]

  if (!path) {
    console.error('Usage: publish <src>')
    process.exit(1)
  }

  await publish(`packages/${path}`)
}
