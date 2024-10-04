import { PokemonStatBar } from './PokemonStatsBar';
export const PokemonStats = (): JSX.Element => {
  return (
    <div
      className="rounded-lg float-left my-4 w-full text-white p-3"
      style={{
        background: '#A4A4A4'
      }}
    >
      <h3 className="pb-3 border-0 text-inherit clear-both font-xl float-left">Base points</h3>
      <ul className="  border-0 w-full list-none clear-both mb-[1.5rem] flex flex-row justify-center">
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
