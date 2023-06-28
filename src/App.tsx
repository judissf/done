import { Provider } from './Context'
import { RoutesMain } from './routes'
import { Toaster } from 'react-hot-toast'
import './App.css'

export function App() {
  return (
    <>
      <Toaster />
      <Provider>
        <RoutesMain />
      </Provider>
    </>
  )
}
