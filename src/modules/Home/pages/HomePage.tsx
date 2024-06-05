import { PokemonCard } from '../components/PokemonCard'
import React from 'react'
import { usePokemons } from '../hooks/usePokemons'
import { Loader } from '../../../components/Loader'
import { Pokemon } from 'pokeapi-js-wrapper'
export const HomePage = (): JSX.Element => {

	const { loading, pokemons, error, loadMorePokemons } = usePokemons()

	if (error) return <p>Error: {error}</p>
	if (loading) return <Loader />
	return (
		<>
			{loading && <Loader />}
			<main>
				<div className="bg-white px-16 py-16 max-w-3/4">
					<div className="grid sm:grid-cols-4 gap-3">
						{pokemons?.map((pokemon: Pokemon) => (
							<React.Fragment key={`${pokemon.name}-${pokemon.id}`}>
								<PokemonCard pokemon={pokemon} />
							</React.Fragment>
						))}
					</div>

					<button
						className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded mt-10"
						onClick={() => loadMorePokemons()}
					>
						Load More Pokemons
					</button>
				</div>
			</main>
		</>
	)
}
