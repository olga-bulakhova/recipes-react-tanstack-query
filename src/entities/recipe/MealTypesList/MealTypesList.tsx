import { Typography } from '@/shared/components'
import s from './MealTypesList.module.css'
import { Link } from 'react-router-dom'

interface MealTypesListProps {
	mealTypes: string[]
}

export const MealTypesList = ({ mealTypes }: MealTypesListProps) => {
	return (
		<Typography
			variant='body3'
			className={s.mealType}
		>
			{mealTypes.map(meal => (
				<Link
					to={`/meal-type/${meal.toLowerCase()}`}
					key={meal}
				>
					{meal}
				</Link>
			))}
		</Typography>
	)
}
