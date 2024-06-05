import { useEffect, useState } from 'react'
import { getPokemons } from '../services/getPokemons'
import { Pokemon } from 'pokeapi-js-wrapper'
export const usePokemons = () => {
	const [loading, setLoading] = useState(true)
	const [pokemons, setPokemons] = useState<Pokemon[]>([])
	const [error, setError] = useState('')
	const [offset, setOffset] = useState(0)

	const loadMorePokemons = (): void => {
		setOffset((prev) => prev + 20)
	}
	useEffect(() => {
		const fetchPokemons = async () => {
			try {
				const data = await getPokemons({ offset })
				if (offset > 0) {
					setPokemons((prev) => [...prev, ...data])
				} else {
					setPokemons(data)
				}
				setLoading(false)
			} catch (error) {
				setError('Error fetching pokemons')
				setLoading(false)
			}
		}

		fetchPokemons()
	}, [offset])
	return { loading, pokemons, error, loadMorePokemons }
}
