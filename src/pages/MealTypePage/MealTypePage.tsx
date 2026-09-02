import { RecipesList } from '@/widgets/RecipesList'
import { useParams } from 'react-router-dom'

const MealTypePage = () => {
	const { type = '' } = useParams<{ type: string }>()

	if (!type) return null

	return (
		<RecipesList
			limit={12}
			title={`${type} recipes`}
			category='meal-type'
			categoryName={type}
		/>
	)
}

export default MealTypePage
