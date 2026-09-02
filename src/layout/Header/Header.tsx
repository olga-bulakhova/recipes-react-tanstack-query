import { Link } from 'react-router-dom'
import s from './Header.module.css'
import logo from '@/assets/img/logo.svg'

export const Header = () => {
	return (
		<header className={s.header}>
			<div className='wrapper'>
				<Link to={'/'}>
					<img
						src={logo}
						alt='logo'
						width={30}
						height={30}
					/>
				</Link>
			</div>
		</header>
	)
}
