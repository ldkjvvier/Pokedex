import { Pokedex } from 'pokeapi-js-wrapper'
const P = new Pokedex()
export const getPokemons = async (limit = 20, offset = 0) => {
	try {
		const pokemons = await P.getPokemonsList({ limit, offset })

		const newData = pokemons.results.map(async (pokemon) => {
			const pokemonRecord = await P.getPokemonByName(pokemon.name)
			return pokemonRecord
		})
		const data = await Promise.all(newData)
		return data
	} catch (error) {
		throw new Error('Error fetching pokemons')
	}
}
