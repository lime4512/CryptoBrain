import { FunctionComponent } from 'react'
import '../../style/navLink.scss'

interface Props {
	active: boolean
}

export const NavLink: FunctionComponent<Props> = ({ active }) => {
	return (
		<div className={active ? 'nav-links open' : 'nav-links'}>
			<ul className='nav-link-list'>
				<li className='nav-link'>
					<div className='link-items'>
						<a href='#' className='nav-link-item'>
							Market
						</a>
						<img src='arrow-down.svg' alt='' />
					</div>
				</li>
				<li className='nav-link'>
					<div className='link-items'>
						<a href='#' className='nav-link-item'>
							Trade
						</a>
						<img src='arrow-down.svg' alt='' />
					</div>
				</li>
				<li className='nav-link'>
					<div className='link-items'>
						<a href='#' className='nav-link-item'>
							Earn
						</a>
						<img src='arrow-down.svg' alt='' />
					</div>
				</li>
				<li className='nav-link'>
					<a href='#' className='nav-link-item'>
						About
					</a>
				</li>
				<li className='nav-link'>
					<a href='#' className='nav-link-item'>
						Career
					</a>
				</li>
			</ul>
		</div>
	)
}
