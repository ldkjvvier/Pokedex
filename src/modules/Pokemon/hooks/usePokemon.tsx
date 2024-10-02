import { getPokemon, getSpecies } from '../services/pokemonService';
import { useEffect, useState } from 'react';
import { Pokemon, PokemonSpecies } from 'pokeapi-js-wrapper';

export const usePokemon = (name: string) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [species, setSpecies] = useState<PokemonSpecies>(); // Ajusta el tipo según la estructura de `species`
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPokemonData = async (): Promise<void> => {
      try {
        // Usamos Promise.all para hacer las dos llamadas simultáneamente
        const [pokemonData, speciesData] = await Promise.all([getPokemon(name), getSpecies(name)]);

        if (pokemonData) setPokemon(pokemonData);
        if (speciesData) setSpecies(speciesData);

        setLoading(false);
      } catch (error) {
        setError('Error fetching pokemon or species');
        setLoading(false);
      }
    };

    fetchPokemonData().catch(() => {
      setError('Error fetching pokemon or species');
      setLoading(false);
    });
  }, [name]);

  return { pokemon, species, error, loading };
};
