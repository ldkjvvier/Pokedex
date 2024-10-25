import { Color } from '@/models/Color';
import { Link } from 'react-router-dom';
import { Pokemon } from 'pokeapi-js-wrapper';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { formatPokemonId } from '@/utils/formatPokemonId';

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }): JSX.Element => {
  const officialArtworkUrl = pokemon.sprites?.other?.['official-artwork']?.front_default ?? '';

  return (
    <div className="animation gap-3 bg-white flex flex-wrap flex-col max-w-56">
      <div className="bg-gray-200 rounded flex">
        <Link to={`${pokemon.name}`}>
          <img
            loading="lazy"
            src={officialArtworkUrl}
            alt={`${pokemon.name} avatar image`}
            className="bg-cover pointer-events-none"
          />
        </Link>
      </div>
      <section className="p-3 text-start">
        <p className="flexoBold text-gray-500 text-xs font-bold">N.° {formatPokemonId(pokemon.id)}</p>
        <h5 className="text-black text-lg pt-1.5 font-bold">{capitalizeFirstLetter(pokemon.name)}</h5>
        <div>
          {Array.isArray(pokemon.types) &&
            pokemon.types.map((type) => {
              const typeName = type.type.name as keyof typeof Color;
              const typeColor = Color[typeName] || {
                background: 'default-background-color',
                text: 'default-text-color'
              };

              return (
                <span
                  className={`flexoMedium text-gray-500 rounded px-6 py-1 text-[11px] mr-2 mt-2`}
                  key={typeName}
                  style={{
                    background: typeColor.background,
                    color: typeColor.text
                  }}
                >
                  {capitalizeFirstLetter(type.type.name)}
                </span>
              );
            })}
        </div>
      </section>
    </div>
  );
};
