import React from 'react'
interface PokemonStatBarProps {
	name: string
}
export const PokemonStatBar = ({
	name,
}: PokemonStatBarProps): JSX.Element => {
	return (
		<li className="roboto font-bold  border-0 float-left inline-block list-none text-inherit text-white  w-1/6 ml-3">
			<ul className="border-0 text-inherit bg-white relative">
				{Array.from({ length: 15 }).map((_, index) => (
					<React.Fragment key={index}>
						<li
							className="list-none m-0 p-0 font-inherit align-baseline antialiased border-b-2 z-1 bg-transparent"
							style={{
								height: '12px',
								width: '100%',
								color: 'black',
								borderBottom: '3px solid #A4A4A4',
							}}
						></li>
					</React.Fragment>
				))}
			</ul>
			<span
				className="list-none   border-0 text-inherit  float-left text-center w-full antialiased bg-transparent text-xs font-semibold"
				style={{ color: 'black' }}
			>
				{name}
			</span>
		</li>
	)
}
