import type { CategoryType, IRecipeFilters } from '../types'

export const recipesKeys = {
	all: ['recipes'] as const,
	list: () => [...recipesKeys.all, 'list'] as const,

	filteredList: (filters: IRecipeFilters, category: CategoryType = 'all', categoryName: string) =>
		[...recipesKeys.list(), category, categoryName, filters] as const,

	single: (id: number) => [...recipesKeys.all, 'single', id] as const,
}
