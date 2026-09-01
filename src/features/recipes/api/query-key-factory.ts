import type { IRecipeFilters } from '../types'

export const recipesKeys = {
	all: ['recipes'] as const, // recipes
	list: () => [...recipesKeys.all, 'list'] as const, //  recipes, list
	filteredList: (filters: IRecipeFilters) => [...recipesKeys.list(), filters] as const, //  recipes, list, {:filter}
	single: (id: number) => [...recipesKeys.all, 'single', id] as const, // recipes, single, :id
}
