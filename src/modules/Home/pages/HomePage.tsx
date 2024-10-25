import { PokemonCard } from '../components/PokemonCard';
import React from 'react';
import { usePokemons } from '../hooks/usePokemons';
import { Loader } from '../../../components/Loader';
import { Pokemon } from 'pokeapi-js-wrapper';
import { useAutoAnimate } from '@formkit/auto-animate/react';
export const HomePage = (): JSX.Element => {
  const { isLoading, pokemons, error, fetchMorePokemons } = usePokemons();
  const [parent] = useAutoAnimate();

  if (error) return <p>Error: {error.message}</p>;
  if (isLoading || pokemons.length < 1) return <Loader />;
  if (!pokemons) return <p>No Pokemons</p>;
  return (
    <main className="bg-white px-16 py-16 max-w-3/4">
      <div className="grid sm:grid-cols-4 gap-3" ref={parent}>
        {pokemons.map((pokemon: Pokemon) => (
          <React.Fragment key={`${pokemon.name}-${pokemon.id}`}>
            <PokemonCard pokemon={pokemon} />
          </React.Fragment>
        ))}
      </div>

      <button className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded mt-10" onClick={() => void fetchMorePokemons()}>
        Load More Pokemons
      </button>
    </main>
  );
};
