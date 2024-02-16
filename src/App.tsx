import './index.css'
import { AppRouter } from './AppRouter'
import { PokemonProvider } from './context/PokemonProvider'

function App(): JSX.Element{
	return (
		<PokemonProvider>
			<AppRouter />
		</PokemonProvider>
	)
}

export default App
