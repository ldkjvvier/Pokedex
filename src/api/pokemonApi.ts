import axios from 'axios'

export const pokemonApi = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/',
})
export const pokemonWeaknessesApi = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/type/',
})
export const pokemonEvolutionsApi = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/evolution-chain/',
})
export const pokemonSpeciesApi = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/pokemon-species/',
})	