import { PokemonContext } from './PokemonContext'
import { useEffect, useState } from 'react'
import {
	pokemonApi,
	pokemonWeaknessesApi,
	pokemonSpeciesApi,
	pokemonEvolutionsApi,
} from '../api/pokemonApi'
import { AllPokemons } from '../interfaces/AllPokemons'

export const PokemonProvider = ({
	children,
}: PokemonProviderProps): JSX.Element => {
	const [Pokemons, setPokemons] = useState<Array<AllPokemons>>([])
	const [offset, setOffSet] = useState(0)

	/* Obtener todos los Pokemones desde la API */
	const getPokemons = async (limit = 12) => {
		console.log('Obteniendo pokemons')
		const { data } = await pokemonApi.get(
			`pokemon?limit=${limit}&offset=${offset}`
		)
		const promises = data.results.map(
			async (pokemon: { url: string }) => {
				const res = await pokemonApi.get(pokemon.url)
				return res.data
			}
		)
		const results = await Promise.all(promises)
		setPokemons([
			...(Pokemons != undefined ? Pokemons : []),
			...results,
		])
	}

	/* Obtener solo un Pokemon */
	const getPokemon = async (id: number): Promise<AllPokemons> => {
		try {
			const { data } = await pokemonApi.get(`pokemon/${id}`)
			return data
		} catch (error) {
			console.log(error)
		}
		return {} as AllPokemons
	}
	/* Obtener Debilidades de un Pokemon */
	const getWeakness = async (
		id: number
	): Promise<AllPokemons | undefined> => {
		try {
			const { data } = await pokemonWeaknessesApi.get(`${id}`)
			return data
		} catch (error) {
			console.log(error)
		}
		return {} as AllPokemons
	}
	/* Obtener Especies de un Pokemon */
	const getSpecies = async (
		id: number
	): Promise<AllPokemons | undefined> => {
		try {
			const { data } = await pokemonSpeciesApi.get(`${id}`)
			return data
		} catch (error) {
			console.log(error)
		}
		return {} as AllPokemons
	}

	/* Obtener Evoluciones de un Pokemon */
	const getEvolutions = async (
		id: number
	): Promise<AllPokemons | undefined> => {
		try {
			const { data } = await pokemonEvolutionsApi.get(`${id}`)
			return data
		} catch (error) {
			console.log(error)
		}
		return {} as AllPokemons
	}

	useEffect(() => {
		getPokemons()
	}, [offset])

	/* Cargar mas Pokemones */
	const onclickLoadMorePokemons: () => void = () => {
		setOffSet(offset + 12)
		getPokemons(12)
	}

	return (
		<PokemonContext.Provider
			value={{
				Pokemons,
				getPokemon,
				getWeakness,
				onclickLoadMorePokemons,
				getSpecies,
				getEvolutions,
			}}
		>
			{children}
		</PokemonContext.Provider>
	)
}

interface PokemonProviderProps {
	children: React.ReactNode
}
