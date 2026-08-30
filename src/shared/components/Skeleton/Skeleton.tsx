import { clsx } from 'clsx'
import type { ComponentProps, CSSProperties } from 'react'

import s from './Skeleton.module.css'

export type SkeletonProps = {
	width?: number | string
	height?: number | string
	circle?: boolean
	className?: string
	style?: CSSProperties
} & ComponentProps<'div'>

export const Skeleton = ({ width, height, circle, className, style, ...props }: SkeletonProps) => {
	return (
		<div
			className={clsx(s.skeleton, className, circle && s.circle)}
			style={{ width, height, ...style }}
			{...props}
		/>
	)
}
