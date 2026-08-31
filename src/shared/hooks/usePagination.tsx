import { useState, useCallback, useMemo } from 'react'

interface UsePaginationProps {
	totalItems: number
	limit: number
	initialPage?: number
	maxVisiblePages?: number
}

export const usePagination = ({ totalItems, limit, initialPage = 1, maxVisiblePages = 5 }: UsePaginationProps) => {
	const [currentPage, setCurrentPage] = useState<number>(initialPage)

	const totalPages = useMemo(() => {
		return Math.max(1, Math.ceil(totalItems / limit))
	}, [totalItems, limit])

	const normalizedPage = useMemo(() => {
		return Math.min(Math.max(1, currentPage), totalPages)
	}, [currentPage, totalPages])

	const skip = useMemo(() => (normalizedPage - 1) * limit, [normalizedPage, limit])

	const handlePageChange = useCallback(
		(page: number) => {
			setCurrentPage(Math.min(Math.max(1, page), totalPages))
		},
		[totalPages],
	)

	const pageNumbers = useMemo(() => {
		const pages: (number | 'ellipsis')[] = []

		if (totalPages <= maxVisiblePages) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i)
			}
		} else {
			pages.push(1)

			if (normalizedPage > 3) {
				pages.push('ellipsis')
			}

			const start = Math.max(2, normalizedPage - 1)
			const end = Math.min(totalPages - 1, normalizedPage + 1)

			for (let i = start; i <= end; i++) {
				if (i !== 1 && i !== totalPages) {
					pages.push(i)
				}
			}

			if (normalizedPage < totalPages - 2) {
				pages.push('ellipsis')
			}

			if (totalPages > 1) {
				pages.push(totalPages)
			}
		}

		return pages
	}, [totalPages, normalizedPage, maxVisiblePages])

	return {
		currentPage: normalizedPage,
		skip,
		totalPages,
		pageNumbers,
		handlePageChange,
	}
}
