import { RecipeCard } from '@/entities/recipe'
import { useRecipesQuery, type CategoryType } from '@/features/recipes'
import { ContentList } from '@/pages/common/ContentList'
import { Pagination, Skeleton, Typography } from '@/shared/components'
import { usePageSearchParams } from '@/shared/hooks/usePageSearchParams'
import { usePagination } from '@/shared/hooks/usePagination'

const RECIPE_SKELETON = <Skeleton height={350} />

interface RecipesListProps {
	limit: number
	title: string
	category?: CategoryType
	categoryName?: string
}

export const RecipesList = (props: RecipesListProps) => {
	const { limit, title, category, categoryName } = props

	const { currentPage, handlePageChange, queryParams } = usePageSearchParams(limit)

	const { data: recipesResponse, isLoading: isRecipesLoading } = useRecipesQuery(queryParams, category, categoryName)

	const { totalPages, pageNumbers } = usePagination({
		totalItems: recipesResponse?.total ?? 0,
		limit: limit,
		initialPage: currentPage,
	})

	return (
		<div className='wrapper'>
			<Typography
				variant='h1'
				className='center capitalize'
			>
				{title}
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
