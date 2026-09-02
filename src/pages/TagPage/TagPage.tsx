import { RecipesList } from '@/widgets/RecipesList'
import { useParams } from 'react-router-dom'

const TagPage = () => {
	const { type = '' } = useParams<{ type: string }>()

	if (!type) return null

	return (
		<RecipesList
			limit={12}
			title={`${type} recipes`}
			category='tag'
			categoryName={type}
		/>
	)
}

export default TagPage
