import React from 'react'
import { Typography } from '@/shared/components'

interface RecipeHeaderProps {
	name: string
}

export const RecipeHeader: React.FC<RecipeHeaderProps> = ({ name }) => {
	return (
		<Typography
			variant='h1'
			className='center'
		>
			{name}
		</Typography>
	)
}
