import { useRecipes } from '@/features/recipes'
import { Typography } from '@/shared/components'
import { ContentList } from '../common/ContentList'
import { RecipeCard } from '@/entities/recipe'

const MainPage = () => {
	const limit = 20

	const { data: recipesResponse, isLoading: isREcipesLoading } = useRecipes({ limit })

	if (isREcipesLoading) return <div>...isLoading</div>

	return (
		<div className='wrapper'>
			<Typography
				variant='h1'
				className='center'
			>
				Homemade cooking recipes
			</Typography>

			<ContentList
				data={recipesResponse?.recipes}
				renderItem={recipe => {
					return <RecipeCard recipe={recipe} />
				}}
				isLoading={isREcipesLoading}
				skeleton={<div>---</div>}
				rowKey={recipe => recipe.id}
			/>
		</div>
	)
}

export default MainPage
