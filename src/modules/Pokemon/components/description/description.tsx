import { PokemonSpecies } from 'pokeapi-js-wrapper';
import { PokeBallIcon } from '@/components';
interface PokemonDescriptionProps {
  specie: PokemonSpecies;
}
export const PokemonDescription = ({ specie }: PokemonDescriptionProps) => {
  const description =
    specie.flavor_text_entries.find((entry) => entry.language.name === 'en')?.flavor_text ??
    'Descripción no disponible';

  return (
    <>
      <div>
        <p className="text-lg pb-3">{description}</p>
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
