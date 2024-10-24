import React from 'react';
interface PokemonStatBarProps {
  name: string;
}
export const PokemonStatBar = ({ name }: PokemonStatBarProps): JSX.Element => {
  return (
    <li className="border-0 text-white ml-3 w-full max-w-[55px]">
      <ul className="border-0 bg-white">
        {Array.from({ length: 15 }).map((_, index) => (
          <React.Fragment key={index}>
            <li className="border-b-[0.25rem] border-[#a4a4a4] h-[12px]"></li>
          </React.Fragment>
        ))}
      </ul>
      <p className="robotoBold text-center bg-transparent text-xs text-[#212121]">{name}</p>
    </li>
  );
};
