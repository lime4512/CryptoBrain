import { useState } from 'react'
import '../../style/navBar.scss'
import { Container } from '../Container'
import { NavLink } from './NavLink'
export const NavBar = () => {
	const [menuActive, setMenuActive] = useState(false)
	return (
		<nav>
			<Container>
				<div className='navigation'>
					<div className='logo'>
						<img src='Logo-img.svg' alt='' />
					</div>
					<NavLink active={menuActive} />

					<div className='nav-btn'>
						<button className='nav-btn-log'>Log In</button>
						<button className='nav-btn-sing'>Sign Up</button>
						<button className='nav-btn-mob' onClick={() => setMenuActive(true)}>
							<img src='/icon-ball.svg' alt='' />
						</button>
					</div>
				</div>
			</Container>
		</nav>
	)
}
