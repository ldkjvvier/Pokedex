import { Pokedex } from 'pokeapi-js-wrapper'
const P = new Pokedex()

export const getPokemon = async (id: number) => {
	const Pokemon = await P.getPokemonByName(id)
	return Pokemon
}

export const getType = async (id: number) => {
	const Pokemon = await P.getTypeByName(id)
	return Pokemon
}

export const getChain = async (id: number) => {
	const Pokemon = await P.getEvolutionChainById(id)
	return Pokemon
}
