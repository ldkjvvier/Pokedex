import { Color } from '../../Home/interfaces/Color'
import { useParams } from 'react-router-dom'
import { FemaleIcon, MaleIcon } from '../../../components/icons'
import { PokemonStats } from '../components/stats/PokemonStats'
import { PokemonEvolutions } from '../components/evolutions/PokemonEvolutions'
import { PokeBallIcon } from '../../../components/icons'
import { usePokemon } from '../hooks/usePokemon'
import { NotFound } from '../../../components/NotFound'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'


export const PokemonPage = (): JSX.Element => {
	const { id } = useParams()
	const { pokemon, error, loading } = usePokemon(Number(id))

	if (loading) return <p>Cargando...</p>
	if (error) return <p>Error: {error}</p>
	if (!pokemon) return <NotFound />
	return (
		<main>
			<div className="flexoMedium font-bold px-3 w-full text-black flex flex-col items-center align-middle float-end">
				<div className="flex flex-col xl:3/4 2xl:w-3/5 w-4/5  bg-white">
					<section className="flex justify-center text-xl gap-12 pb-6 font-4xl pt-12 ">
						<h4 className="text-3xl">
							{capitalizeFirstLetter(pokemon.name)}
						</h4>
						<span className="text-3xl text-gray-600">
							N.° {pokemon.id}
						</span>
					</section>

					<section className="lg:grid grid-cols-2 p-3 mb-16 flex-wrap gap-3">
						<div className="rounded">
							<div
								className="rounded"
								style={{
									background: '#F2F2F2',
								}}
							>
								<picture className="">
									<img
										src={
											pokemon.sprites.other['official-artwork']
												.front_default ?? ''
										}
										alt={pokemon.name + ' avatar image'}
										className="w-full object-fill block p-0 m-0 border-0 pb-8"
									/>
								</picture>
							</div>
							<div>
								<PokemonStats />
							</div>
						</div>

						<div className="text-start">
							<div>
								<p className="text-lg pb-3">
									{/* {getFlavorTextSpanish()} */}
								</p>
							</div>
							<div className="pb-6 flex gap-3">
								<span className="font-medium text-lg">
									Versiones:
								</span>
								<span className=" border-4 rounded-full border-transparent hover:border-[#17ADFF] transition">
									<PokeBallIcon color={'#0072B0'} />
								</span>
								<span className=" border-4 rounded-full border-transparent hover:border-[#EB859A] transition">
									<PokeBallIcon color={'#DD2D51'} />
								</span>
							</div>

							<div
								className="bg-cyan-600/70 rounded p-3 flex mb-6 text-lg"
								style={{
									background: '#30A7D7',
								}}
							>
								<div className="w-2/4">
									<ul className="">
										<li className="flex flex-col">
											<span className="text-white ">Altura</span>
											<span className="">{pokemon.height}</span>
										</li>
										<li className="flex flex-col">
											<span className="text-white">Peso</span>
											<span>{pokemon.weight}</span>
										</li>
										<li className="flex flex-col">
											<span className="text-white">Sexo</span>
											<div className="flex gap-2">
												<span>
													<MaleIcon />
												</span>
												<span>
													<FemaleIcon />
												</span>
											</div>
										</li>
									</ul>
								</div>
								<div className="w-2/4">
									<ul>
										<li className="flex flex-col">
											<span className="text-white">Categoría</span>
											<span>{/* {getCategorySpanish()} */}</span>
										</li>
										<li className="flex flex-col">
											<span className="text-white">Habilidad</span>
											{pokemon.abilities.map(
												(
													ability: { ability: { name: string } },
													index
												) => (
													<span key={index}>
														{capitalizeFirstLetter(
															ability.ability.name
														)}
													</span>
												)
											)}
										</li>
									</ul>
								</div>
							</div>

							<div className="flex flex-col text-lg pb-6">
								<span className="font-medium">Tipo</span>
								<ul className="flex flex-wrap">
									{pokemon.types.map(
										(type: { type: { name: string } }, index) => (
											<li
												className={`text-gray-500 rounded px-12 py-0 text-[16px] mr-2 mt-2`}
												key={index}
												style={{
													background:
														Color[
															type.type.name as keyof typeof Color
														].background,
													color:
														Color[
															type.type.name as keyof typeof Color
														].text,
												}}
											>
												<span>
													{capitalizeFirstLetter(type.type.name)}
												</span>
											</li>
										)
									)}
								</ul>
							</div>

							<div className="text-lg pb-6">
								<span className="font-medium">Debilidad</span>

								<ul className="flex flex-wrap">
									{/* 										{PokemonWeakness.damage_relations?.double_damage_from.map(
											(weakness, index) => (
												<li
													className={`text-gray-500 rounded px-12 py-0 text-[16px] mr-2 mt-2`}
													style={{
														background:
															Color[
																weakness.name as keyof typeof Color
															].background,
														color:
															Color[
																weakness.name as keyof typeof Color
															].text,
													}}
													key={index}
												>
													<span>
														{capitalizeFirstLetter(weakness.name)}
													</span>
												</li>
											)
										) ?? <span>Error al cargar debilidades</span>} */}
								</ul>
							</div>
						</div>
					</section>
					<PokemonEvolutions />
				</div>
			</div>
		</main>
	)
}