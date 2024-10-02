import { Pokemon } from 'pokeapi-js-wrapper';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { PokeBallIcon } from '@/components';
interface PokemonDescriptionProps {
  pokemon: Pokemon;
}
export const PokemonDescription = ({ pokemon }: PokemonDescriptionProps) => {
  return (
    <>
      <div>
        <p className="text-lg pb-3">
          {capitalizeFirstLetter(pokemon.name)} es un Pokémon de tipo{' '}
          {pokemon.types.map((type: { type: { name: string } }, index) => (
            <span key={index}>{capitalizeFirstLetter(type.type.name)}</span>
          ))}
          . {pokemon.species.name} es un Pokémon de la{' '}
          {pokemon.id <= 151
            ? 'Primera'
            : pokemon.id <= 251
            ? 'Segunda'
            : pokemon.id <= 386
            ? 'Tercera'
            : pokemon.id <= 493
            ? 'Cuarta'
            : pokemon.id <= 649
            ? 'Quinta'
            : pokemon.id <= 721
            ? 'Sexta'
            : pokemon.id <= 809
            ? 'Séptima'
            : pokemon.id <= 898
            ? 'Octava'
            : 'Desconocida'}{' '}
          generación . Su número de Pokédex es{' '}
          {pokemon.id.toString().length === 1
            ? '00' + pokemon.id
            : pokemon.id.toString().length === 2
            ? '0' + pokemon.id
            : pokemon.id}
          .
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
    </>
  );
};
