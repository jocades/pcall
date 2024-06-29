import { mount } from './jsx'

function Button(props: { className: string; children: any }) {
  return (
    <button className={props.className} onClick={() => console.log('Hello!')}>
      {props.children}
    </button>
  )
}

function Counter(props: { value: number }) {
  let count = props.value

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => count++}>Increment</button>
    </div>
  )
}

function App() {
  return (
    <main>
      Hello World!
      <Counter value={0} />
      <Button className="btn">Click me</Button>
    </main>
  )
}

// @ts-ignore
mount(<App />, document.querySelector('#app'))
