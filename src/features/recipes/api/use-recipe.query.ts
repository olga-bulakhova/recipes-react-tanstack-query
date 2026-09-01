import { useQuery } from '@tanstack/react-query'
import { recipesKeys } from './query-key-factory'
import { recipesService } from './recipes.service'

export const useRecipeQuery = (recipeId: number) => {
	return useQuery({
		queryKey: recipesKeys.single(recipeId),
		queryFn: () => recipesService.getSingle(recipeId),
		retry: (failureCount, error) => {
			if ('status' in error && (error.status === 401 || error.status === 404)) {
				return false
			}
			return failureCount < 2
		},
		enabled: !!recipeId,
	})
}
