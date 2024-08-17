import { getPokemon } from '../services/pokemonService';
import { useEffect, useState } from 'react';
import { Pokemon } from 'pokeapi-js-wrapper';
export const usePokemon = (id: number) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getPokemon(id);
        if (data) setPokemon(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching pokemon');
        setLoading(false);
      }
    };

    void fetchPokemon();
  }, [id]);

  return { pokemon, error, loading };
};
