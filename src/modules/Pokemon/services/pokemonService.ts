import { Pokedex } from 'pokeapi-js-wrapper';
const P = new Pokedex();

export const getPokemon = async (name: string) => {
  const Pokemon = await P.getPokemonByName(name);
  return Pokemon;
};

export const getType = async (name: string) => {
  const Pokemon = await P.getTypeByName(name);
  return Pokemon;
};

export const getChain = async (id: number) => {
  const Pokemon = await P.getEvolutionChainById(id);
  return Pokemon;
};

export const getSpecies = async (name: string) => {
  const Pokemon = await P.getPokemonSpeciesByName(name);
  return Pokemon;
};
