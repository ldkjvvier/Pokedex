import { PokemonStatBar } from './PokemonStatsBar';
export const PokemonStats = (): JSX.Element => {
  return (
    <div className="rounded-lg float-left my-4 w-full text-white p-3 bg-[#A4A4A4] border-0">
      <h3 className="pb-3 border-0 clear-both font-xl float-left text-[#313131] transform-none">Base points</h3>
      <ul className="w-full list-none mb-[1rem] flex flex-row justify-center">
        <PokemonStatBar name={'PS'} />
        <PokemonStatBar name={'Attack'} />
        <PokemonStatBar name={'Defense'} />
        <PokemonStatBar name={'Special Attack'} />
        <PokemonStatBar name={'Special Defense'} />
        <PokemonStatBar name={'Speed'} />
      </ul>
    </div>
  );
};
