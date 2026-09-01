import type { IRecipe } from '@/features/recipes'
import s from './RecipeCard.module.css'
import { IconLabel, Rating, Typography } from '@/shared/components'
import { CaloriesIcon } from '@/shared/icons/CaloriesIcon'
import { ClockIcon } from '@/shared/icons/ClockIcon'
import { MealTypesList } from '../MealTypesList/MealTypesList'
import { Link } from 'react-router-dom'

interface RecipeCardProps {
	recipe: IRecipe
}

export const RecipeCard: React.FC<RecipeCardProps> = props => {
	const { recipe } = props

	return (
		<div className={s.recipeCard}>
			<Link
				to={`/recipe/${recipe.id}`}
				className={s.recipeCardImage}
			>
				<img
					src={recipe.image}
					alt={recipe.name}
				/>
			</Link>

			<div className={s.recipeCardDetails}>
				<div>
					<div className={s.recipeCardInfo}>
						<IconLabel icon={<CaloriesIcon />}>
							<span>{recipe.caloriesPerServing} kcal</span>
						</IconLabel>

						<IconLabel icon={<ClockIcon />}>
							<span>{recipe.cookTimeMinutes + recipe.prepTimeMinutes} min</span>
						</IconLabel>
					</div>
					<Link to={`/recipe/${recipe.id}`}>
						<Typography variant='h3'>{recipe.name}</Typography>
					</Link>
				</div>

				<div className={s.recipeCardFooter}>
					<Rating value={recipe.rating} />
					<MealTypesList mealTypes={recipe.mealType} />
				</div>
			</div>
		</div>
	)
}
