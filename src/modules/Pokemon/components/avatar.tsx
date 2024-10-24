import { Pokemon } from 'pokeapi-js-wrapper';

export const Avatar = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="rounded bg-[#F2F2F2] w-full">
      <picture className="">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default ?? ''}
          alt={pokemon.name + ' avatar image'}
          className="object-fill block p-0 m-0 border-0 pb-8"
        />
      </picture>
    </div>
  );
};
