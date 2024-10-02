import { Pokemon } from 'pokeapi-js-wrapper';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { MaleIcon, FemaleIcon } from '@/components';
interface PokemonInfoProps {
  pokemon: Pokemon;
}

export const PokemonInfo = ({ pokemon }: PokemonInfoProps) => {
  return (
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
            {pokemon.abilities.map((ability, index) => {
              console.log(ability.ability.name, index);

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
