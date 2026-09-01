import { RecipesList } from '@/widgets/RecipesList/RecipesList'

const MainPage = () => {
	return (
		<RecipesList
			limit={12}
			title='Homemade cooking recipes'
		/>
	)
}

export default MainPage
