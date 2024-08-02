/* import { getChain } from '../services/pokemonService'
import { useEffect, useState } from 'react'
export const useEvolution = (id: number) => {
	const [chain, setChain] = useState()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchPokemon = async () => {
			try {
				const data = await getChain(id)
				if (data) setChain(data)
				setLoading(false)
			} catch (error) {
				setError('Error fetching pokemon')
				setLoading(false)
			}
		}

		fetchPokemon()
	}, [id])

	return { chain, error, loading }
}
 */