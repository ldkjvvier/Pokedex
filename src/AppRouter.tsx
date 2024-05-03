import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PokemonPage } from './pages/PokemonPage'

export const AppRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/Pokedex" element={<HomePage />} />
			<Route path="Pokedex/:id" element={<PokemonPage />} />
			<Route path="*" element={<HomePage />} />
		</Routes>
	)
}
