import { Color } from '../../Home/interfaces/Color';
import { useParams } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { Weakness, PokemonStats, PokemonEvolutions } from '../components';
import { Loader, FemaleIcon, MaleIcon, PokeBallIcon, NotFound } from '@/components';
export const PokemonPage = (): JSX.Element => {
  const { id } = useParams();
  const { pokemon, error, loading } = usePokemon(Number(id));

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
              <div>
                <p className="text-lg pb-3">
                  {capitalizeFirstLetter(pokemon.name)} es un Pokémon de tipo{' '}
                  {pokemon.types.map((type: { type: { name: string } }, index) => (
                    <span key={index}>{capitalizeFirstLetter(type.type.name)}</span>
                  ))}
                  . {pokemon.species.name} es un Pokémon de la generación {pokemon.species.name} y su número de Pokédex
                  es {pokemon.species.url}.
                </p>
              </div>
              <div className="pb-6 flex gap-3">
                <span className="font-medium text-lg">Versiones:</span>
                <span className=" border-4 rounded-full border-transparent hover:border-[#17ADFF] transition">
                  <PokeBallIcon color={'#0072B0'} />
                </span>
                <span className=" border-4 rounded-full border-transparent hover:border-[#EB859A] transition">
                  <PokeBallIcon color={'#DD2D51'} />
                </span>
              </div>

              <div className="bg-[#30A7D7] text-center grid grid-cols-1 md:grid-cols-2 rounded p-3 mb-6 text-lg">
                <div className="w-full md:w-2/4">
                  <ul className="">
                    <li>
                      <span className="text-white ">Altura</span>
                      <br />
                      <span className="">{pokemon.height}</span>
                    </li>
                    <li>
                      <span className="text-white">Peso</span>
                      <br />
                      <span>{pokemon.weight}</span>
                    </li>
                    <li>
                      <span className="text-white">Sexo</span>
                      <div className="flex gap-2 justify-center">
                        <span>
                          <MaleIcon />
                        </span>
                        <span>
                          <FemaleIcon />
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-2/4">
                  <ul>
                    <li>
                      <span className="text-white">Categoría</span>
                      <br />
                      <span>{capitalizeFirstLetter(pokemon.species.name)}</span>
                    </li>
                    <li>
                      <span className="text-white">Habilidad</span>
                      <br />
                      {pokemon.abilities.map((ability: { ability: { name: string } }, index) => (
                        <>
                          <span key={index}>{capitalizeFirstLetter(ability.ability.name)}</span>
                          <br />
                        </>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col text-lg pb-6">
                <span className="font-medium">Tipo</span>
                <ul className="flex flex-wrap">
                  {pokemon.types.map((type: { type: { name: string } }, index) => (
                    <li
                      className={`text-gray-500 rounded px-12 py-0 text-[16px] mr-2 mt-2`}
                      key={index}
                      style={{
                        background: Color[type.type.name as keyof typeof Color].background,
                        color: Color[type.type.name as keyof typeof Color].text
                      }}
                    >
                      <span>{capitalizeFirstLetter(type.type.name)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Weakness id={Number(id)} />
            </div>
          </section>
          <PokemonEvolutions />
        </div>
      </div>
    </main>
  );
};
