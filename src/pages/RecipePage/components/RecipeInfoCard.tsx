import React from 'react'
import { IconLabel, Rating, Typography } from '@/shared/components'

import s from '../RecipePage.module.css' 
import { CaloriesIcon, ClockIcon, CuisineIcon, DifficultyIcon } from '@/shared/icons'
import { CategoriesList } from '@/entities/recipe'

interface RecipeInfoCardProps {
	image: string
	name: string
	mealType: string[]
	rating: number
	difficulty: string
	cuisine: string
	prepTimeMinutes: number
	cookTimeMinutes: number
	ingredients: string[]
	caloriesPerServing: number
	tags: string[]
}

export const RecipeInfoCard: React.FC<RecipeInfoCardProps> = ({
	image,
	name,
	mealType,
	rating,
	difficulty,
	cuisine,
	prepTimeMinutes,
	cookTimeMinutes,
	ingredients,
	caloriesPerServing,
	tags,
}) => {
	return (
		<div className={s.infoGrid}>
			<div className={s.imageWrapper}>
				<img
					src={image}
					alt={name}
				/>
			</div>

			<div className={s.metaContent}>
				<div>
					<CategoriesList
						categories={mealType}
						categoryType='meal-type'
					/>
					<CategoriesList
						categories={tags}
						categoryType='tag'
					/>
				</div>

				<Rating value={rating} />

				<div className={s.metaGroup}>
					<IconLabel icon={<DifficultyIcon />}>
						<span>Difficulty:&ensp;{difficulty} </span>
					</IconLabel>

					<IconLabel icon={<CuisineIcon />}>
						<span>Cuisine:&ensp;{cuisine} </span>
					</IconLabel>
					<IconLabel icon={<CaloriesIcon />}>
						<span>Calories per serving:&ensp;{caloriesPerServing} kcal</span>
					</IconLabel>
					<IconLabel icon={<ClockIcon />}>
						<span>Prep time:&ensp;{prepTimeMinutes} min</span>
					</IconLabel>
					<IconLabel icon={<ClockIcon />}>
						<span>Cook Time:&ensp;{cookTimeMinutes} min</span>
					</IconLabel>
				</div>

				<div>
					<Typography
						variant='h2'
						className='mb-5'
					>
						Ingredients:
					</Typography>
					{ingredients.map((ingredient, idx) => (
						<Typography
							key={`${ingredient}-${idx}`}
							variant='body2'
						>
							{ingredient}
						</Typography>
					))}
				</div>
			</div>
		</div>
	)
}
