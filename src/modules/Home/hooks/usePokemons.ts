import { getPokemons } from '../services/getPokemons'
import { Pokemon } from 'pokeapi-js-wrapper'
import { useQuery } from '@tanstack/react-query'
export const usePokemons = () => {
	const offset = 0
	const { data, error, isLoading } = useQuery<{
		pokemons: Pokemon[]
	}>({
		queryKey: ['pokemons'],
		queryFn: async () => {
			const pokemons = await getPokemons(offset);
			console.log(pokemons);
			return { pokemons };
		},
	})


	return {
		pokemons: data?.pokemons,
		error,
		isLoading,

		isPreviousData: isLoading,
	}
}
