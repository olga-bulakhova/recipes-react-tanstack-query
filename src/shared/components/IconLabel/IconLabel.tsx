import React from 'react'
import clsx from 'clsx'
import s from './IconLabel.module.css'

interface IconLabelProps extends React.ComponentPropsWithoutRef<'span'> {
	icon: React.ReactNode // Принимает иконку (например, <ClockIcon />)
	children: React.ReactNode // Принимает текст, span или ссылку <a> / <Link>
}

export const IconLabel: React.FC<IconLabelProps> = ({ icon, children, className, ...props }) => {
	return (
		<span
			className={clsx(s.iconLabel, className)}
			{...props}
		>
			<span
				className={s.iconWrapper}
				aria-hidden='true'
			>
				{icon}
			</span>
			<span className={s.contentWrapper}>{children}</span>
		</span>
	)
}

IconLabel.displayName = 'IconLabel'
