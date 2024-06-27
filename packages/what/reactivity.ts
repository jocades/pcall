import {
  reactive,
  ref,
  effect,
  computed,
  isReactive,
  isRef,
} from '@vue/reactivity'

export { ref as $state }

// const state = reactive([1, 2, 3])
//
// effect(() => {
//   console.log('state', state)
// })
//
// state.push(4)

const count = ref(0)

const list = [1, 2, 3]

function increment() {
  list.forEach((item) => {})
}

effect(() => {
  increment()
})

count.value++
