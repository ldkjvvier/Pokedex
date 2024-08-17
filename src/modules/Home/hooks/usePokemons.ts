import { getPokemons } from '../services/getPokemons';
import { Pokemon } from 'pokeapi-js-wrapper';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export const usePokemons = () => {
  const [page, setPage] = useState(0);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const fetchPokemons = async (page: number) => {
    const offset = page * 20;
    const pokemons = await getPokemons(20, offset);
    return pokemons;
  };

  const { error, isLoading } = useQuery<Pokemon[]>({
    queryKey: ['pokemons', page], // Añade la página al queryKey para que refetch dependa de la página actual
    queryFn: async () => {
      const pokemons = await fetchPokemons(page);
      setPokemonList((prevList) => [...prevList, ...pokemons]);
      return pokemons;
    },
    refetchOnWindowFocus: false,
    enabled: page === 0 // Solo se ejecuta la primera vez (cuando page es 0)
  });

  const fetchMorePokemons = async (): Promise<void> => {
    setIsFetchingMore(true);
    const nextPage = page + 1;
    const newPokemons = await fetchPokemons(nextPage);
    console.log(newPokemons);
    // Usamos un Set para evitar duplicados
    const uniquePokemons = Array.from(new Set([...pokemonList, ...newPokemons]));

    setPokemonList(uniquePokemons);
    setPage(nextPage);
    setIsFetchingMore(false);
  };

  return {
    pokemons: pokemonList || [],
    error,
    isLoading: page === 0 && isLoading,
    fetchMorePokemons,
    isFetchingMore
  };
};
