import type { IRecipeFilters } from '../types'

export const recipesKeys = {
	all: ['recipes'] as const, // recipes
	list: () => [...recipesKeys.all, 'list'] as const, //  recipes, list
	filteredList: (filters: IRecipeFilters) => [...recipesKeys.list(), filters] as const, //  recipes, list, {:filter}
	details: () => [...recipesKeys.all, 'detail'] as const, // recipes, detail
	detail: (id: number) => [...recipesKeys.details(), id] as const, // recipes, details, :id
}
