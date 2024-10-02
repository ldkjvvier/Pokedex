import { useParams } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { Weakness, PokemonStats, PokemonEvolutions } from '../components';
import { Loader, NotFound } from '@/components';
import { PokemonType } from '../components/type/type';
import { PokemonDescription } from '../components/description/description';
import { PokemonInfo } from '../components/info/info';
export const PokemonPage = (): JSX.Element => {
  const { name } = useParams();
  if (!name) return <NotFound />;

  const { pokemon, error, loading } = usePokemon(name);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!pokemon) return <NotFound />;

  return (
    <main>
      <div className="flexoMedium font-bold md:px-3 w-full text-black flex flex-col items-center align-middle float-end">
        <div className="flex flex-col md:w-4/5 px-5  bg-white">
          <section className="flex justify-center text-xl gap-12 pb-6 font-4xl pt-12 ">
            <h4 className="text-3xl">{capitalizeFirstLetter(pokemon.name)}</h4>
            <span className="text-3xl text-gray-600">
              N.°{' '}
              {pokemon.id.toString().length === 1
                ? '00' + pokemon.id
                : pokemon.id.toString().length === 2
                ? '0' + pokemon.id
                : pokemon.id}
            </span>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 p-3 mb-16 flex-wrap gap-3">
            <div className="rounded">
              <div
                className="rounded"
                style={{
                  background: '#F2F2F2'
                }}
              >
                <picture className="">
                  <img
                    src={pokemon.sprites.other['official-artwork'].front_default ?? ''}
                    alt={pokemon.name + ' avatar image'}
                    className="w-full object-fill block p-0 m-0 border-0 pb-8"
                  />
                </picture>
              </div>
              <div>
                <PokemonStats />
              </div>
            </div>

            <div className="text-start">
              <PokemonDescription pokemon={pokemon} />

              <PokemonInfo pokemon={pokemon} />

              <PokemonType pokemon={pokemon} />

              <Weakness id={pokemon.id} />
            </div>
          </section>
          <PokemonEvolutions specieName={pokemon.species.name} />
        </div>
      </div>
    </main>
  );
};
