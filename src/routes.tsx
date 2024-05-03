import { createHashRouter } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { PokemonPage } from "./pages/PokemonPage"
export const router = createHashRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/:id', element: <PokemonPage /> },
])
