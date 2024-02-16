interface NamedAPIResource {
	name: string
	url: string
}

interface VersionDetails {
	rarity: number
	version: NamedAPIResource
}

interface VersionGroupDetails {
	level_learned_at: number
	move_learn_method: NamedAPIResource
	version_group: NamedAPIResource
}

interface Language {
	name: string
	url: string
}

interface Version {
	name: string
	url: string
}

interface Sprite {
	front_default: string | null
	front_female: string | null
	front_shiny: string | null
	front_shiny_female: string | null
}

interface OtherSprites {
	dream_world: Sprite
	home: Sprite
	'official-artwork': Sprite
	showdown: Sprite
}

interface VersionSprites {
	[key: string]: {
		[key: string]: Sprite
	}
}

interface Type {
	slot: number
	type: NamedAPIResource
}

interface Stat {
	base_stat: number
	effort: number
	stat: NamedAPIResource
}

interface DoubleDamageFrom {
	name: string
	url: string
}

interface FlavorTextEntry {
	flavor_text: string
	language: Language
	version: Version
}

export interface AllPokemons {
	id: number
	name: string
	base_experience: number
	height: number
	is_default: boolean
	url: string
	order: number
	weight: number
	genera: {
		genus: string
		language: Language
	}[]
	abilities: {
		ability: NamedAPIResource
		is_hidden: boolean
		slot: number
	}[]
	forms: NamedAPIResource[]
	game_indices: {
		game_index: number
		version: NamedAPIResource
	}[]
	held_items: {
		item: NamedAPIResource
		version_details: VersionDetails[]
	}[]
	location_area_encounters: string
	moves: {
		move: NamedAPIResource
		version_group_details: VersionGroupDetails[]
	}[]
	species: NamedAPIResource & { evolution_chain: { url: string } }
	sprites: {
		back_default: string | null
		back_female: string | null
		back_shiny: string | null
		back_shiny_female: string | null
		front_default: string | null
		front_female: string | null
		front_shiny: string | null
		front_shiny_female: string | null
		other: OtherSprites
		versions: VersionSprites
	}
	stats: Stat[]
	types: Type[]
	damage_relations: {
		double_damage_from: DoubleDamageFrom[]
	}
	flavor_text_entries: FlavorTextEntry[]
}
