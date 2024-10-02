import { Pokemon, PokemonSpecies } from 'pokeapi-js-wrapper';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { MaleIcon, FemaleIcon } from '@/components';
interface PokemonInfoProps {
  pokemon: Pokemon;
  specie: PokemonSpecies;
}

export const PokemonInfo = ({ pokemon, specie }: PokemonInfoProps) => {
  // Encuentra la categoría en inglés
  const category =
    specie.genera
      .find((genus) => genus.language.name === 'en')
      ?.genus.split('Pokémon')[0]
      .trim() ?? 'Unknown';

  return (
    <div className="bg-[#30A7D7] text-start grid grid-cols-1 md:grid-cols-2 rounded p-3 mb-6 text-lg">
      <div className="w-full md:w-2/4">
        <ul>
          <li>
            <span className="text-white">Altura</span>
            <br />
            <span>{(pokemon.height / 10).toFixed(1).replace('.', ',')} m</span>
          </li>
          <li>
            <span className="text-white">Peso</span>
            <br />
            <span>{(pokemon.weight / 10).toFixed(1).replace('.', ',')} kg</span>
          </li>
          <li>
            <span className="text-white">Sexo</span>
            <div className="flex gap-2">
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
            <span>{capitalizeFirstLetter(category)}</span>
          </li>
          <li>
            <span className="text-white">Habilidad</span>
            <br />
            {pokemon.abilities.map((ability) => {
              return (
                <>
                  <span key={ability.ability.name}>{capitalizeFirstLetter(ability.ability.name)}</span>
                  <br />
                </>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};
