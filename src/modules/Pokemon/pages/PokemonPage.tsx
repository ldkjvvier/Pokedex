import { useParams } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { Weakness, PokemonStats, PokemonEvolutions } from '../components';
import { Loader, NotFound } from '@/components';
import { PokemonType } from '../components/type/type';
import { PokemonDescription } from '../components/description/description';
import { PokemonInfo } from '../components/info/info';
import { formatPokemonId } from '@/utils/formatPokemonId';
export const PokemonPage = (): JSX.Element => {
  let { name } = useParams();
  name = name?.toLocaleLowerCase();
  if (!name) return <NotFound />;

  const { pokemon, species, error, loading } = usePokemon(name);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!pokemon || !species) return <NotFound />;

  return (
    <main>
      <div className="flexoMedium font-bold md:px-3 w-full text-black flex flex-col items-center align-middle float-end">
        <div className="flex flex-col md:w-3/5 px-3 bg-white mb-24">
          <section className="flex justify-center text-xl gap-12 pb-6 font-4xl pt-12 ">
            <h4 className="text-3xl">{capitalizeFirstLetter(pokemon.name)}</h4>
            <span className="text-3xl text-gray-600">N.° {formatPokemonId(pokemon.id)}</span>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 mb-16 flex-wrap gap-3">
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
              <PokemonDescription specie={species} />

              <PokemonInfo pokemon={pokemon} specie={species} />

              <PokemonType pokemon={pokemon} />

              <Weakness pokemon={pokemon} />
            </div>
          </section>
          <PokemonEvolutions specieName={pokemon.species.name} />
          <div className="flex w-full justify-end my-6">
            <a
              className="bg-[#ee6b2f] hover:bg-[#da471b] text-[1rem] p-[1rem] rounded-md text-white cursor-pointer transition-all"
              href="/"
            >
              Go to the Pokédex
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
