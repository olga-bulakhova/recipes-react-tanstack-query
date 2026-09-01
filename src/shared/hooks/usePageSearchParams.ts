import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { IRecipeFilters } from '@/features/recipes'

export const usePageSearchParams = (limit: number) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const pageNumber = useMemo(() => {
		const page = Number(searchParams.get('page'))
		return !page || page < 1 ? 1 : page
	}, [searchParams])

	const queryParams = useMemo<IRecipeFilters>(
		() => ({
			limit,
			skip: (pageNumber - 1) * limit,
		}),
		[limit, pageNumber],
	)

	const updateSearchParams = useCallback(
		(updates: Record<string, string | string[] | number | undefined>) => {
			setSearchParams(
				prev => {
					const newParams = new URLSearchParams(prev)

					Object.entries(updates).forEach(([key, value]) => {
						if (value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) {
							newParams.delete(key)
						} else if (Array.isArray(value)) {
							newParams.set(key, value.join(','))
						} else {
							newParams.set(key, value.toString())
						}
					})

					if (!updates.page && pageNumber > 1) {
						newParams.delete('page')
					}

					return newParams
				},
				{ replace: true },
			)
		},
		[setSearchParams, pageNumber],
	)

	const handlePageChange = useCallback(
		(page: number) => {
			updateSearchParams({ page: page <= 1 ? undefined : page })
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		},
		[updateSearchParams],
	)

	return {
		currentPage: pageNumber,
		handlePageChange,
		searchParams,
		queryParams,
	}
}
