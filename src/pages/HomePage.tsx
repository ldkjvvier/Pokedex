import { PokemonCard } from '../components/PokemonCard'
import { PokemonContext } from '../context/PokemonContext'
import React, { useContext } from 'react'
import { AllPokemons } from '../interfaces/AllPokemons'
import { Loader } from '../components/Loader'

export const HomePage = (): JSX.Element => {
	const { Pokemons, onclickLoadMorePokemons } = useContext(PokemonContext) as { Pokemons: AllPokemons[], onclickLoadMorePokemons: () => void }

	return (
		<main>
			{(Pokemons && (
				<div className="bg-white px-16 py-16 max-w-3/4">
					<div className="grid sm:grid-cols-4 gap-3">
						{Pokemons.map((pokemon: AllPokemons) => (
							<React.Fragment key={`${pokemon.name}-${pokemon.id}`}>
								<PokemonCard pokemon={pokemon} />
							</React.Fragment>
						))}
					</div>

					<button
						className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded mt-10"
						onClick={() => onclickLoadMorePokemons()}
					>
						Load More Pokemons
					</button>
				</div>
			)) || <Loader />}
		</main>
	)
}
