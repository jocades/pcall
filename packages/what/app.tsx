import { ref } from '@vue/reactivity'
import { mount } from './jsx'

function Button(props: { text: string; children: any }) {
  return (
    <button class={props.class} onClick={() => console.log('Hello!')}>
      {props.children}
    </button>
  )
}

function Counter(props: { value: number }) {
  const count = ref(props.value)

  return (
    <div>
      <h1>Count: {count.value}</h1>
      <button onClick={() => count.value++}>Increment</button>
    </div>
  )
}

function App() {
  return (
    <main>
      Hello World!
      <Counter value={0} />
    </main>
  )
}

mount(<App />, document.querySelector('#app'))
