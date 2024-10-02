import { Pokemon } from 'pokeapi-js-wrapper';
import { getChain, getSpecies, getPokemon } from '../services/pokemonService';
import { useEffect, useState } from 'react';
export const useEvolution = (specieName: string) => {
  const [evolutions, setEvolutions] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPokemon = async (): Promise<void> => {
      try {
        // 2. Obtener la información de la especie
        const species = await getSpecies(specieName);

        // 3. Obtener la URL de la cadena de evolución
        const evolutionChainUrl = species.evolution_chain.url;

        // 4. Obtener la cadena de evolución
        const evolutionChainId = evolutionChainUrl.split('/').slice(-2, -1)[0]; // Obtener el ID de la cadena
        const evolutionChain = await getChain(Number(evolutionChainId));

        // 5. Extraer las evoluciones
        const evolutions = [];
        let currentEvolution = evolutionChain.chain;

        do {
          evolutions.push(currentEvolution.species.name); // Añadir la especie actual
          currentEvolution = currentEvolution.evolves_to[0]; // Avanzar al siguiente en la cadena
        } while (currentEvolution);

        console.log(evolutions);

        // 6. Obtener la información de cada evolución
        const pokemonPromises = evolutions.map((evolution) => getPokemon(evolution));
        const pokemon = await Promise.all(pokemonPromises);

        setEvolutions(pokemon);
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
  }, [specieName]);

  return { evolutions, error, loading };
};
