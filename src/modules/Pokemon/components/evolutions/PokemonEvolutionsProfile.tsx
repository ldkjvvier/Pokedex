import { Pokemon } from 'pokeapi-js-wrapper';
import { Color } from '@/models/Color';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { formatPokemonId } from '@/utils/formatPokemonId';

interface PokemonEvolutionProfileProps {
  pokemon: Pokemon;
}

export const PokemonEvolutionProfile = ({ pokemon }: PokemonEvolutionProfileProps) => {
  return (
    <>
      <div className="text-white flex flex-col items-center">
        <div
          className="p-3 rounded-full border-white border-4 h-40 w-40 bg-opacity-10 mb-3 overflow-visible"
          style={{
            backgroundColor: '#616161',
            boxShadow: '0px 2px 8px 0px #000000'
          }}
        >
          <img
            src={pokemon.sprites.other['official-artwork'].front_default ?? ''}
            alt={pokemon.name + ' avatar image'}
            className="bg-transparent object-cover z-0 overflow-hidden"
          />
        </div>
        <div>
          <div className="inline-flex gap-2">
            <h3 className="font-bold text-[1.1rem]">{capitalizeFirstLetter(pokemon.name)}</h3>
            <span className="flexo text-[#a4acaf]">N.º {formatPokemonId(pokemon.id)}</span>
          </div>
          <ul className="flex flex-wrap">
            {pokemon.types.map((type, index) => (
              <li
                className={`text-gray-500 rounded px-5 py-0 text-[12px] mr-2 mt-2`}
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
      </div>
    </>
  );
};
