import { useType } from '../../hooks/useType';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { Color } from '@/modules/Home/interfaces/Color';
import { Pokemon } from 'pokeapi-js-wrapper';
export const Weakness = ({ pokemon }: { pokemon: Pokemon }): JSX.Element => {
  const typeNames = pokemon.types.map((type) => type.type.name);

  const { types, loading, error } = useType(typeNames);
  if (loading) return <p>Cargando...</p>;
  if (!types || error) return <span>Error al cargar debilidades</span>;

  // Aplanar todas las debilidades de los tipos y eliminar duplicados
  const weaknesses = Array.from(
    new Set(types.flatMap((type) => type.damage_relations.double_damage_from.map((weakness) => weakness.name)))
  );

  return (
    <div className="text-lg pb-6">
      <span className="font-medium">Debilidad</span>

      <ul className="flex flex-wrap">
        {weaknesses.map((weakness, index) => (
          <li
            className={`text-gray-500 rounded px-12 py-0 text-[16px] mr-2 mt-2`}
            style={{
              background: Color[weakness as keyof typeof Color].background,
              color: Color[weakness as keyof typeof Color].text
            }}
            key={index}
          >
            <span>{capitalizeFirstLetter(weakness)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
