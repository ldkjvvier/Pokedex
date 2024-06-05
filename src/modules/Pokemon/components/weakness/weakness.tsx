import { useType } from '../../hooks/useType'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { Color } from '@/modules/Home/interfaces/Color'
export const Weakness = ({ id }: { id: number }): JSX.Element => {
	const { type, loading, error } = useType(id)
	if (loading) return <p>Cargando...</p>
	if (error) return <p>Error: {error}</p>
	if (!type) return <span>Error al cargar debilidades</span>
	return (
		<div className="text-lg pb-6">
			<span className="font-medium">Debilidad</span>

			<ul className="flex flex-wrap">
				{type.damage_relations.double_damage_from.map(
					(weakness, index) => (
						<li
							className={`text-gray-500 rounded px-12 py-0 text-[16px] mr-2 mt-2`}
							style={{
								background:
									Color[weakness.name as keyof typeof Color]
										.background,
								color:
									Color[weakness.name as keyof typeof Color].text,
							}}
							key={index}
						>
							<span>{capitalizeFirstLetter(weakness.name)}</span>
						</li>
					)
				)}
			</ul>
		</div>
	)
}
