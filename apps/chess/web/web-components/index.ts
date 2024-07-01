import { init } from './web-component'
import { HTMLChessboardElement } from './chess-board'

customElements.define('chess-board', HTMLChessboardElement)
init()

/* const el = document.querySelector<HTMLDivElement>('#drag')!

el.ondragstart = (e) => {
  console.log('drag start', e.target)
  e.dataTransfer!.setData('text/plain', e.target.id)
}

el.ondragend = (e) => {
  const success = e.dataTransfer!.dropEffect === 'move'
  console.log('drag end', success)
}

const target = document.querySelector<HTMLDivElement>('#target')!

target.ondragover = (e) => {
  e.preventDefault()
  console.log('drag over')
  e.dataTransfer!.dropEffect = 'move'
}

target.ondrop = (e) => {
  e.preventDefault()
  const data = e.dataTransfer!.getData('text/plain') as string
  ;(e.target as HTMLDivElement).appendChild(document.getElementById(data)!)
} */
