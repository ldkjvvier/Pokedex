import { PokemonEvolutionProfile } from './PokemonEvolutionsProfile'
export const PokemonEvolutions = (): JSX.Element => {

	return (
		<div className="flex justify-center">
			<div
				className="bg-background-image w-11/12 opacity-90 text-white text-start p-6 mb-48"
				style={{
					backgroundColor: '#424242',
					borderRadius: '5px 5px 5px 50px',
				}}
			>
				<h4 className="font-bold text-2xl mb-6">Evoluciones</h4>
				<div className="grid grid-cols-3 h-full">
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
