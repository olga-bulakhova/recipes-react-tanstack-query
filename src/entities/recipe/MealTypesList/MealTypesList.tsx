import { Typography } from '@/shared/components'
import s from './MealTypesList.module.css'

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
				<span key={meal}>{meal}</span>
			))}
		</Typography>
	)
}
