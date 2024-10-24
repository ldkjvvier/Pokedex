import { PokemonSpecies } from 'pokeapi-js-wrapper';
import { PokeBallIcon } from '@/components';
import { useState } from 'react';
interface PokemonDescriptionProps {
  specie: PokemonSpecies;
}

type Version = 'blue' | 'red';

export const PokemonDescription = ({ specie }: PokemonDescriptionProps) => {
  const [selectedVersion, setSelectedVersion] = useState<string>('blue');
  const description =
    specie.flavor_text_entries.find((entry) => entry.language.name === 'en')?.flavor_text ??
    'Descripción no disponible';

  const handleVersionChange = (version: Version): void => {
    setSelectedVersion(version);
  };
  return (
    <>
      <div>
        <p className="text-lg pb-3">{description}</p>
      </div>
      <div className="pb-6 flex gap-3">
        <span className="font-medium text-lg">Versions:</span>
        <span
          className={`border-4 rounded-full border-transparent cursor-pointer ${
            selectedVersion === 'blue' ? 'border-[#17ADFF]' : ''
          } transition`}
          onClick={() => handleVersionChange('blue')}
        >
          <PokeBallIcon color={'#0072B0'} />
        </span>
        <span
          className={`border-4 rounded-full border-transparent cursor-pointer ${
            selectedVersion === 'red' ? 'border-[#EB859A]' : ''
          } transition`}
          onClick={() => handleVersionChange('red')}
        >
          <PokeBallIcon color={'#DD2D51'} />
        </span>
      </div>
    </>
  );
};
