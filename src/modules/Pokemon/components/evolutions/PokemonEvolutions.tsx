import { useEvolution } from '../../hooks/useEvolution';
import { PokemonEvolutionProfile } from './PokemonEvolutionsProfile';

interface PokemonEvolutionsProps {
  specieName: string;
}
export const PokemonEvolutions = ({ specieName }: PokemonEvolutionsProps) => {
  const { evolutions, error, loading } = useEvolution(specieName);
  console.log(evolutions);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="w-full">
      {' '}
      {/* Añadido position relative al contenedor principal */}
      <div className=" relative bg-background-image z-0 bg-[#424242] opacity-90 text-white text-start p-6 mb-24 rounded-[5px]">
        <h4 className="font-bold text-2xl mb-6">Evoluciones</h4>
        <div className="grid md:grid-cols-3 gap-12">
          {evolutions.map((evolution, index) => (
            <PokemonEvolutionProfile key={index} pokemon={evolution} />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 p-6 -rotate-90 bg-background-dog-ear bg-no-repeat" />
      </div>
    </div>
  );
};
