import { createHashRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { NotFound } from './components/NotFound'
import { PokemonPage } from './pages/PokemonPage'

export const router = createHashRouter([
	{ path: '/', element: <HomePage/> },
	{ path: '/pokemon/:id', element: <PokemonPage/> },
	{ path: '*', element: <NotFound/> }
])