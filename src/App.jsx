import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
import './styles/variables.css'
import './styles/globals.css'

export default function App() {
  return <RouterProvider router={router} />
}
