import { createHashRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { NotFound } from './components/NotFound'
export const router = createHashRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '*', element: <NotFound/>}
])
