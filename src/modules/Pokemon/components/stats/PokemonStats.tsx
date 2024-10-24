import { Pokemon } from 'pokeapi-js-wrapper';
import { PokemonStatBar } from './PokemonStatsBar';

interface PokemonStatsProps {
  pokemon: Pokemon;
}

export const PokemonStats = ({ pokemon }: PokemonStatsProps): JSX.Element => {
  // Extrayendo las estadísticas para evitar buscar repetidamente
  const hp = pokemon.stats.find((stat) => stat.stat.name === 'hp')?.base_stat ?? 0;
  const attack = pokemon.stats.find((stat) => stat.stat.name === 'attack')?.base_stat ?? 0;
  const defense = pokemon.stats.find((stat) => stat.stat.name === 'defense')?.base_stat ?? 0;
  const specialAttack = pokemon.stats.find((stat) => stat.stat.name === 'special-attack')?.base_stat ?? 0;
  const specialDefense = pokemon.stats.find((stat) => stat.stat.name === 'special-defense')?.base_stat ?? 0;
  const speed = pokemon.stats.find((stat) => stat.stat.name === 'speed')?.base_stat ?? 0;

  console.log(hp);
  return (
    <div className="rounded-lg my-4 w-full text-white p-3 bg-[#A4A4A4] border-0">
      <h3 className="pb-3 font-xl text-[#313131]">Base points</h3>
      <ul className="w-full list-none mb-[1rem] flex flex-row justify-center">
        <PokemonStatBar name="PS" level={hp} />
        <PokemonStatBar name="Attack" level={attack} />
        <PokemonStatBar name="Defense" level={defense} />
        <PokemonStatBar name="Special Attack" level={specialAttack} />
        <PokemonStatBar name="Special Defense" level={specialDefense} />
        <PokemonStatBar name="Speed" level={speed} />
      </ul>
    </div>
  );
};
