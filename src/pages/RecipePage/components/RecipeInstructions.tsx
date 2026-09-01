import React from 'react'
import { Typography } from '@/shared/components'

interface RecipeInstructionsProps {
	instructions: string[]
}

export const RecipeInstructions: React.FC<RecipeInstructionsProps> = ({ instructions }) => {
	return (
		<div>
			<Typography
				variant='h2'
				className='mb-10'
			>
				Instructions:
			</Typography>

			{instructions.map((instruction, idx) => (
				<Typography
					key={idx}
					variant='body2'
				>
					{`${idx + 1}. ${instruction}`}
				</Typography>
			))}
		</div>
	)
}
