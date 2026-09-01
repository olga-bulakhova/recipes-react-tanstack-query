import { http } from '@/shared/api/http.service'
import type { IRecipe, IRecipeFilters, IRecipesResponse } from '../types'

const recipesEndpoint = '/recipes'

export const recipesService = {
	getListWithParams: async (params?: IRecipeFilters): Promise<IRecipesResponse> => {
		const { data } = await http.get<IRecipesResponse>(recipesEndpoint, {
			params,
		})
		return data
	},
	getSingle: async (id: number): Promise<IRecipe> => {
		const { data } = await http.get<IRecipe>(`${recipesEndpoint}/${id}`)
		return data
	},
}
