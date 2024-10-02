import { Pokemon } from 'pokeapi-js-wrapper';
import { Color } from '../../../Home/interfaces/Color';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

interface PokemonEvolutionProfileProps {
  pokemon: Pokemon;
}

export const PokemonEvolutionProfile = ({ pokemon }: PokemonEvolutionProfileProps) => {
  return (
    <>
      <div className="text-white flex flex-col items-center">
        <div
          className="p-6 rounded-full border-white border-4 h-36 w-36 bg-opacity-10 mb-3"
          style={{
            backgroundColor: '#616161',
            boxShadow: '0px 2px 8px 0px #000000'
          }}
        >
          <img
            src={pokemon.sprites.other['official-artwork'].front_default ?? ''}
            alt={pokemon.name + ' avatar image'}
            className="bg-transparent object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p>
            <span className="font-bold">{pokemon.name}</span> N.°{' '}
            {pokemon.id.toString().length === 1
              ? '00' + pokemon.id
              : pokemon.id.toString().length === 2
              ? '0' + pokemon.id
              : pokemon.id}
          </p>
          <ul className="flex flex-wrap justify-center">
            {pokemon.types.map((type: { type: { name: string } }, index) => (
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
