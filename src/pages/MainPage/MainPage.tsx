import { useRecipesQuery } from '@/features/recipes'
import { Pagination, Skeleton, Typography } from '@/shared/components'
import { ContentList } from '../common/ContentList'
import { RecipeCard } from '@/entities/recipe'
import { usePageSearchParams } from '@/shared/hooks/usePageSearchParams'
import { usePagination } from '@/shared/hooks/usePagination'

const RECIPE_SKELETON = <Skeleton height={350} />

const LIMIT = 12

const MainPage = () => {
	const { currentPage, handlePageChange, queryParams } = usePageSearchParams(LIMIT)

	const { data: recipesResponse, isLoading: isRecipesLoading } = useRecipesQuery(queryParams)

	const { totalPages, pageNumbers } = usePagination({
		totalItems: recipesResponse?.total ?? 0,
		limit: LIMIT,
		initialPage: currentPage,
	})

	return (
		<div className='wrapper'>
			<Typography
				variant='h1'
				className='center'
			>
				Homemade cooking recipes
			</Typography>

			<ContentList
				data={recipesResponse?.recipes ?? []}
				renderItem={recipe => <RecipeCard recipe={recipe} />}
				isLoading={isRecipesLoading}
				skeleton={RECIPE_SKELETON}
				rowKey={recipe => recipe.id}
			/>

			{recipesResponse && totalPages > 1 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					pageNumbers={pageNumbers}
					onPageChange={handlePageChange}
				/>
			)}
		</div>
	)
}

export default MainPage
