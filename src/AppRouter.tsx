import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PokemonPage } from './pages/PokemonPage'

export const AppRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/pokemon/:id" element={<PokemonPage />} />
			<Route path="*" element={<h1>Not Found</h1>} />
		</Routes>
	)
}
