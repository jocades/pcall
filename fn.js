// testing functions as objects

function fn() {
  return 'fn'
}

fn.prop = 'prop'
fn.method = function () {
  return 'method'
}

console.log({
  fn: fn(),
  'fn.prop': fn.prop,
  'fn.method': fn.method(),
})

// using `this` in a function
function fnThis() {
  this.prop = 'prop'
  this.method = function () {
    return 'method'
  }
  return this
}

const obj = new fnThis()

// what happends if no `new` keyword is used?
// error: Cannot set property 'prop' of undefined

// binding `this` to an object
const obj1 = {}
const obj1FnThis = fnThis.bind(obj1)
obj1FnThis()
console.log({
  'obj1.prop': obj1.prop,
  'obj1.method': obj1.method(),
})

// binding `this` to an object directly
const obj2 = {}

fnThis.call(obj2)

console.log({
  'obj.prop': obj.prop,
  'obj.method': obj.method(),
  'obj2.prop': obj2.prop,
  'obj2.method': obj2.method(),
})
