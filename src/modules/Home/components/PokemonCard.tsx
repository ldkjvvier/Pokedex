import { Link } from 'react-router-dom';
import { Pokemon } from 'pokeapi-js-wrapper';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }): JSX.Element => {
  const officialArtworkUrl = pokemon.sprites?.other?.['official-artwork']?.front_default ?? '';

  return (
    <div className="animation gap-3 bg-white flex flex-wrap flex-col max-w-56">
      <div className="bg-gray-200 rounded flex">
        <Link to={`/pokemon/${pokemon.id}`}>
          <img
            loading="lazy"
            src={officialArtworkUrl}
            alt={pokemon.name + ' avatar image'}
            className="bg-cover pointer-events-none"
          />
        </Link>
      </div>
      <section className="p-3 text-start">
        <p className="flexoBold text-gray-500 text-xs font-bold">N.° {pokemon.id}</p>
        <h5 className="text-black text-lg pt-1.5 font-bold">{capitalizeFirstLetter(pokemon.name)}</h5>
        <div></div>
      </section>
    </div>
  );
};
