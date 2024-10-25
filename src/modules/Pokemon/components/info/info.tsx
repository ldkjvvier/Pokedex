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

  const genderRate = specie.gender_rate;
  let malePercentage = 0;
  let femalePercentage = 0;

  if (genderRate === -1) {
    malePercentage = femalePercentage = 0; // Pokémon sin género
  } else {
    femalePercentage = (genderRate / 8) * 100;
    malePercentage = 100 - femalePercentage;
  }

  return (
    <div className="bg-[#30A7D7] text-start grid grid-cols-1 md:grid-cols-2 rounded p-3 mb-6 text-lg">
      <div className="w-full md:w-2/4">
        <ul>
          <li>
            <span className="text-white">Height</span>
            <br />
            <span>{(pokemon.height / 10).toFixed(1).replace('.', ',')} m</span>
          </li>
          <li>
            <span className="text-white">Weight</span>
            <br />
            <span>{(pokemon.weight / 10).toFixed(1).replace('.', ',')} kg</span>
          </li>
          <li>
            <span className="text-white">Sex</span>
            <div className="flex gap-2">
              {genderRate === -1 ? (
                <span>DESCONOCIDO</span>
              ) : (
                <>
                  {/* Mostrar icono de macho solo si existe porcentaje de machos */}
                  {malePercentage > 0 && (
                    <span>
                      <MaleIcon />
                    </span>
                  )}
                  {/* Mostrar icono de hembra solo si existe porcentaje de hembras */}
                  {femalePercentage > 0 && (
                    <span>
                      <FemaleIcon />
                    </span>
                  )}
                </>
              )}
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-2/4">
        <ul>
          <li>
            <span className="text-white">Category</span>
            <br />
            <span>{capitalizeFirstLetter(category)}</span>
          </li>
          <li>
            <span className="text-white">Ability</span>
            <br />
            {pokemon.abilities.map((ability) => (
              <span key={ability.ability.name}>{capitalizeFirstLetter(ability.ability.name)}</span>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};
