import React from 'react';

interface PokemonStatBarProps {
  name: string;
  level: number;
}

export const PokemonStatBar = ({ name, level }: PokemonStatBarProps): JSX.Element => {
  const totalBars = 15;
  const maxStats = 255;
  const barsToFill = Math.round((level / maxStats) * totalBars);

  return (
    <li className="border-0 text-white ml-3 w-full max-w-[55px]">
      <ul className="border-0 bg-white">
        {Array.from({ length: totalBars }).map((_, index) => (
          <React.Fragment key={index}>
            <li
              className={`border-b-[0.25rem] border-[#a4a4a4] h-[12px] ${
                index >= totalBars - barsToFill ? 'bg-[#30a7d7]' : 'bg-transparent'
              }`}
            ></li>
          </React.Fragment>
        ))}
      </ul>
      <p className="robotoBold text-center bg-transparent text-xs text-[#212121]">{name}</p>
    </li>
  );
};
