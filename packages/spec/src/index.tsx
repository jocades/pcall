import ReactDOM from 'react-dom/client'
import App from './app'
import { type Router } from '@/router'

declare global {
  interface Window {
    __RPC_URL__: string
    __RPC_ROUTER__: Router
  }
}

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <App url={window.__RPC_URL__} router={window.__RPC_ROUTER__} />,
)
