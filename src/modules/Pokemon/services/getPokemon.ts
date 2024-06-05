import { Pokedex } from 'pokeapi-js-wrapper'
const P = new Pokedex()

export const getPokemon = async (id: number) => {
  const Pokemon = await P.getPokemonByName(id)
  return Pokemon
}