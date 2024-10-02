import { Pokemon } from 'pokeapi-js-wrapper';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { Color } from '@/modules/Home/interfaces/Color';

interface PokemonTypeProps {
  pokemon: Pokemon;
}

export const PokemonType = ({ pokemon }: PokemonTypeProps) => {
  return (
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
  );
};
