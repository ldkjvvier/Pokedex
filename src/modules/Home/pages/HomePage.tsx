import { usePokemons } from '../hooks/usePokemons'
import { Loader } from '../../../components/Loader'
export const HomePage = (): JSX.Element => {
	const { isLoading, pokemons, error } = usePokemons()
	if (error) return <p>Error: {error.message}</p>
	if (!pokemons || pokemons.length < 1) return <p>No Pokemons</p>

	return (
		<>
			<main>
				<div className="bg-white px-16 py-16 max-w-3/4">
					<div className="grid sm:grid-cols-4 gap-3">
						{isLoading && <Loader />}

						<p>POKEMONS</p>
					</div>
				</div>
			</main>
		</>
	)
}
