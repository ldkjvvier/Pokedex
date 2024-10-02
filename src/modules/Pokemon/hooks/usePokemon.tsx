import { getPokemon } from '../services/pokemonService';
import { useEffect, useState } from 'react';
import { Pokemon } from 'pokeapi-js-wrapper';
export const usePokemon = (name: string) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPokemon = async (): Promise<void> => {
      try {
        const data = await getPokemon(name);
        if (data) setPokemon(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching pokemon');
        setLoading(false);
      }
    };

    fetchPokemon().catch(() => {
      setError('Error fetching pokemon');
      setLoading(false);
    });
  }, [name]);

  return { pokemon, error, loading };
};
