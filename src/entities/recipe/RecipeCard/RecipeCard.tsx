import type { IRecipe } from '@/features/recipes'
import s from './RecipeCard.module.css'
import { Rating, Typography } from '@/shared/components'
import { CaloriesIcon } from '@/shared/icons/CaloriesIcon'
import { ClockIcon } from '@/shared/icons/ClockIcon'
import { MealTypesList } from '../MealTypesList/MealTypesList'

interface RecipeCardProps {
	recipe: IRecipe
}

export const RecipeCard: React.FC<RecipeCardProps> = props => {
	const { recipe } = props

	return (
		<div className={s.recipeCard}>
			<img
				src={recipe.image}
				alt={recipe.name}
			/>

			<div className={s.recipeCardDetails}>
				<div>
					<Typography
						variant='body3'
						className={s.recipeCardInfo}
					>
						<div className={s.recipeCardWithIcon}>
							<CaloriesIcon />
							<span>{recipe.caloriesPerServing} kcal</span>
						</div>
						<div className={s.recipeCardWithIcon}>
							<ClockIcon />
							<span>{recipe.cookTimeMinutes} min</span>
						</div>
					</Typography>
					<Typography variant='h3'>{recipe.name}</Typography>
				</div>

				<div>
					<Rating value={recipe.rating} />
					<MealTypesList mealTypes={recipe.mealType} />
				</div>
			</div>
		</div>
	)
}
