import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PokemonPage } from './pages/PokemonPage'

export const AppRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/pokedex" element={<HomePage />} />
			<Route path="pokedex/:id" element={<PokemonPage />} />
			<Route path="*" element={<HomePage />} />
		</Routes>
	)
}
