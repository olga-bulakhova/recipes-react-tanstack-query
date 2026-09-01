import React from 'react'

export const DifficultyIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg
		xmlns='http://w3.org'
		viewBox='0 0 24 24'
		width='15'
		height='15'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		{/* Дуга шкалы */}
		<path d='M2 12A10 10 0 0 1 22 12' />
		<path d='M5 19a10 10 0 0 1-3-7' />
		<path d='M19 19a10 10 0 0 0 3-7' />
		{/* Стрелка, указывающая на середину (Medium) */}
		<path d='M12 17l-1.5-6.5c-.3-1 .8-1.8 1.6-1.2l4.9 3.7' />
		{/* Центральная точка */}
		<circle
			cx='12'
			cy='17'
			r='2'
		/>
	</svg>
)
