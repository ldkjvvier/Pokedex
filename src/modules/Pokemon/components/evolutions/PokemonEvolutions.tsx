import { PokemonEvolutionProfile } from './PokemonEvolutionsProfile'
export const PokemonEvolutions = (): JSX.Element => {
	return (
		<div className="flex justify-center">
			<div className="bg-background-image bg-[#424242] w-11/12 opacity-90 text-white text-start p-6 mb-24 rounded-[5px] rounded-bl-[50px] shadow-lg ">
				<h4 className="font-bold text-2xl mb-6">Evoluciones</h4>
				<div className="grid md:grid-cols-3 gap-12">
					<div className="first">
						<PokemonEvolutionProfile />
					</div>
					<div className="middle">
						<PokemonEvolutionProfile />
					</div>
					<div className="last">
						<PokemonEvolutionProfile />
					</div>
				</div>
			</div>
		</div>
	)
}
