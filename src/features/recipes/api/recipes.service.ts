import { http } from '@/shared/api/http.service'
import type { IRecipeFilters, IRecipesResponse } from '../types'

const recipesEndpoint = '/recipes'

export const recipesService = {
	findListWithParams: async (params?: IRecipeFilters, signal?: AbortSignal): Promise<IRecipesResponse> => {
		
		const { data } = await http.get<IRecipesResponse>(recipesEndpoint, {
			params,
			signal,
		})
		return data
	},
}
