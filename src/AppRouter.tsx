import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PokemonPage } from './pages/PokemonPage'

export const AppRouter = (): JSX.Element => {
	const basename = import.meta.env.BASE_URL || '/'
	return (
		<BrowserRouter basename={basename}>
			<Routes>
				<Route path="/Pokedex" element={<HomePage />} />
				<Route path="/Pokedex/:id" element={<PokemonPage />} />
				<Route path="/*" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	)
}
