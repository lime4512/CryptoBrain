import '../../style/navBar.scss'
import { Container } from '../Container'
import { NavLink } from './NavLink'
export const NavBar = () => {
	return (
		<nav>
			<Container>
				<div className='navigation'>
					<div className='logo'>
						<img src='Logo-img.svg' alt='' />
					</div>
					<NavLink />
					<div className='nav-btn'>
						<button>Log In</button>
						<button>Sign Up</button>
					</div>
				</div>
			</Container>
		</nav>
	)
}
