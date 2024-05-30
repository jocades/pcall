import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import { type Router } from 'rpc'

declare global {
  interface Window {
    __RPC_URL__: string
    __RPC_ROUTER__: Router
  }
}

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <App baseURL={window.__RPC_URL__} router={window.__RPC_ROUTER__} />,
)
