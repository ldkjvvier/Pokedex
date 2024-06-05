import { createHashRouter } from 'react-router-dom'
import { HomePage } from './modules/Home'
import { NotFound } from './components/NotFound'
import { PokemonPage } from './modules/Pokemon/pages/PokemonPage'

export const router = createHashRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/pokemon/:id', element: <PokemonPage /> },
	{ path: '*', element: <NotFound /> },
])
