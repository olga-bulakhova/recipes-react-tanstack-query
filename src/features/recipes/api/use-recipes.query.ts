import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { recipesKeys } from './query-key-factory'
import { recipesService } from './recipes.service'
import type { CategoryType, IRecipeFilters } from '../types'

export const useRecipesQuery = (
	params: IRecipeFilters = { limit: 30 } as IRecipeFilters,
	category: CategoryType = 'all',
	categoryName: string = '',
) => {
	return useQuery({
		queryKey: recipesKeys.filteredList(params, category, categoryName),

		queryFn: () => {
			if (category === 'all' || !categoryName) {
				return recipesService.getListWithParams(params)
			}

			return recipesService.getListByCategory(category, categoryName, params)
		},
		placeholderData: keepPreviousData,
		retry: (failureCount, error) => {
			if ('status' in error && (error.status === 401 || error.status === 404)) {
				return false
			}
			return failureCount < 2
		},
	})
}
