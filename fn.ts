function fn() {
  console.log('fn')
}

fn.prop = 'prop'
fn.method = function () {
  console.log('method')
}

// binding
interface I<P> {
  (): void // call signature
  prop: P
  method: () => void
}

const u = {
  name: 'u',
}

function call() {
  console.log(this.name)
}

call.call(u) // u

function f(s: string) {
  return s
}

function gen<T extends string>(s: T): T {
  return s
}

const s1 = f('s1') // string
const s2 = gen('s2') // s2

class Router<T = undefined> {
  [key: string]: T | null
}

const router = new Router<string>()
