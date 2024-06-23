import { sleep } from 'bun'
import { EventEmitter } from 'node:events'

const ee = new EventEmitter()

ee.on('init', (n: number) => {
  console.log('init', n)
  console.log(ee)
})

// await sleep(2000)
//
// ee.emit('init', 42)
// ee.emit('init', 42)
//
interface Options {
  websocket?: boolean
  link?: 'linear' | 'batch'
}

function doSomething({ link = 'linear', websocket = false }: Options) {
  console.log(link, websocket)
}

doSomething({ link: 'batch' })
