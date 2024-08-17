import { getType } from '../services/pokemonService';
import { useEffect, useState } from 'react';
import { Type } from 'pokeapi-js-wrapper';
export const useType = (id: number) => {
  const [type, setType] = useState<Type>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getType(id);
        if (data) setType(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching pokemon');
        setLoading(false);
      }
    };

    void fetchPokemon();
  }, [id]);

  return { type, error, loading };
};
