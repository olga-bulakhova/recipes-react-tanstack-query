import { useParams } from 'react-router-dom'
import { useRecipeQuery } from '@/features/recipes/api/use-recipe.query'
import { RecipeHeader } from './components/RecipeHeader'
import { RecipeInfoCard } from './components/RecipeInfoCard'
import { RecipeInstructions } from './components/RecipeInstructions'
import s from './RecipePage.module.css'
import { Spinner } from '@/shared/components'

const RecipePage = () => {
	const { id } = useParams<{ id: string }>()
	const { data: recipe, isLoading } = useRecipeQuery(Number(id))

	if (isLoading) {
		return <Spinner fullScreen={true} />
	}

	if (!recipe) {
		return <div className='wrapper center'>Recipe not found</div>
	}

	return (
		<div className='wrapper'>
			<RecipeHeader name={recipe.name} />

			<div className={s.container}>
				<RecipeInfoCard
					image={recipe.image}
					name={recipe.name}
					mealType={recipe.mealType}
					rating={recipe.rating}
					difficulty={recipe.difficulty}
					cuisine={recipe.cuisine}
					prepTimeMinutes={recipe.prepTimeMinutes}
					cookTimeMinutes={recipe.cookTimeMinutes}
					ingredients={recipe.ingredients}
					caloriesPerServing={recipe.caloriesPerServing}
				/>

				<RecipeInstructions instructions={recipe.instructions} />
			</div>
		</div>
	)
}

export default RecipePage
