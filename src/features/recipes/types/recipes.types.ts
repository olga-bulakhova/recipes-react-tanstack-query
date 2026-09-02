export interface IRecipe {
	id: number
	name: string
	ingredients: string[]
	instructions: string[]
	prepTimeMinutes: number
	cookTimeMinutes: number
	servings: number
	difficulty: 'Easy' | 'Medium' | 'Hard' | string
	cuisine: string
	caloriesPerServing: number
	tags: string[]
	userId: number
	image: string
	rating: number
	reviewCount: number
	mealType: string[]
}

export interface IRecipesResponse {
	recipes: IRecipe[]
	total: number
	skip: number
	limit: number
}

export interface IRecipeFilters {
	limit?: number
	skip?: number
	sortBy?: string
	order?: string
}

export type CategoryType = 'meal-type' | 'tag' | 'all'
