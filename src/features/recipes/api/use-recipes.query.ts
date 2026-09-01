import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { recipesKeys } from './query-key-factory'
import { recipesService } from './recipes.service'
import type { IRecipeFilters } from '../types'

export const useRecipesQuery = (params: IRecipeFilters = { limit: 30 } as IRecipeFilters) => {
	return useQuery({
		queryKey: recipesKeys.filteredList(params),
		queryFn: () => recipesService.getListWithParams(params),
		placeholderData: keepPreviousData,
		retry: (failureCount, error) => {
			if ('status' in error && (error.status === 401 || error.status === 404)) {
				return false
			}
			return failureCount < 2
		},
	})
}
