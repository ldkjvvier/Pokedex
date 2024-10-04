import { getType } from '../services/pokemonService';
import { useEffect, useState } from 'react';
import { Type } from 'pokeapi-js-wrapper';

export const useType = (names: string[]) => {
  const [types, setTypes] = useState<Type[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const typeDataPromises = names.map((names) => getType(names)); // Obtener todos los tipos en paralelo
        const data = await Promise.all(typeDataPromises); // Esperar a que todos se resuelvan
        setTypes(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching types');
        setLoading(false);
      }
    };

    void fetchTypes();
  }, [names]);

  return { types, error, loading };
};
