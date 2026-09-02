import { Typography } from '@/shared/components'
import s from './CategoriesList.module.css'
import { Link } from 'react-router-dom'

interface CategoriesListProps {
	categories: string[]
	categoryType: 'meal-type' | 'tag'
}

export const CategoriesList = ({ categories, categoryType }: CategoriesListProps) => {
	return (
		<Typography
			variant='body3'
			className={s.category}
		>
			{categories.map(category => (
				<Link
					to={`/${categoryType}/${category.toLowerCase()}`}
					key={category}
				>
					{category}
				</Link>
			))}
		</Typography>
	)
}
