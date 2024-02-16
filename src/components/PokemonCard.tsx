import { AllPokemons } from '../interfaces/AllPokemons'
import { Color } from '../interfaces/Color'
import { capitalizeFirstLetter } from '../utils/helpers'

export const PokemonCard = ({
	pokemon,
}: {
	pokemon: AllPokemons
}): JSX.Element => {
	return (
		<div className="animation gap-3 bg-white flex flex-wrap flex-col max-w-56">
			<div className="bg-gray-200 rounded flex">
				<a href={`${pokemon.id}`}>
					<picture>
						<img
							src={
								pokemon.sprites.other['official-artwork']
									.front_default ?? ''
							}
							alt={pokemon.name + ' avatar image'}
							className="w-48 h-48"
						/>
					</picture>
				</a>
			</div>
			<section className="p-3 text-start">
				<p className="text-gray-500 text-xs font-bold">
					N.° {pokemon.id}
				</p>
				<h5 className="text-black text-lg pt-1.5 font-bold">
					{capitalizeFirstLetter(pokemon.name)}
				</h5>
				<div>
					{pokemon.types.map(
						(type: { type: { name: string } }, index) => (
							<span
								className={`text-gray-500 rounded px-6 py-1 text-[11px] mr-2 mt-2`}
								key={type.type.name + index}
								style={{
									background:
										Color[type.type.name as keyof typeof Color]
											.background,
									color:
										Color[type.type.name as keyof typeof Color].text,
								}}
							>
								{capitalizeFirstLetter(type.type.name)}
							</span>
						)
					)}
				</div>
			</section>
		</div>
	)
}
