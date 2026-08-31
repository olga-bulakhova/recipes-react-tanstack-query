import React from 'react'
import clsx from 'clsx'
import s from './Pagination.module.css'
import { IconButton } from '../IconButton'
import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@/shared/icons'

interface PaginationProps extends React.ComponentPropsWithoutRef<'nav'> {
	currentPage: number
	totalPages: number
	pageNumbers: (number | 'ellipsis')[]
	onPageChange: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	pageNumbers,
	onPageChange,

	className,
	...props
}) => {
	if (totalPages <= 1) {
		return null
	}

	return (
		<nav
			className={clsx(s.pagination, className)}
			role='navigation'
			aria-label='Pagination'
			{...props}
		>
			{/* Кнопка Назад */}
			<IconButton
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				aria-label='Go to previous page'
				className={s.navButton}
			>
				<KeyboardArrowLeftIcon />
			</IconButton>

			{/* Номера страниц */}
			<div className={s.pageNumbers}>
				{pageNumbers.map((pageNumber, index) => {
					if (pageNumber === 'ellipsis') {
						return (
							<span
								key={`ellipsis-${index}`}
								className={s.ellipsis}
								aria-hidden='true'
							>
								...
							</span>
						)
					}

					const isActive = pageNumber === currentPage

					return (
						<button
							key={pageNumber}
							onClick={() => onPageChange(pageNumber)}
							className={clsx(s.pageButton, isActive && s.active)}
							aria-label={`Go to page ${pageNumber}`}
							aria-current={isActive ? 'page' : undefined}
							type='button'
						>
							{pageNumber}
						</button>
					)
				})}
			</div>

			{/* Кнопка Вперед */}
			<IconButton
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				aria-label='Go to next page'
				className={s.navButton}
			>
				<KeyboardArrowRightIcon />
			</IconButton>
		</nav>
	)
}

Pagination.displayName = 'Pagination'
