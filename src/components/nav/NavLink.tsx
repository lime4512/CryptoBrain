import { FunctionComponent, useEffect, useState } from 'react'
import '../../style/navLink.scss'

interface Props {
	active: boolean
	handelMenu: () => void
}

export const NavLink: FunctionComponent<Props> = ({ active, handelMenu }) => {
	const [actives, setActives] = useState(false)
	useEffect(() => {
		setActives(active)
	}, [active])
	return (
		<div className={actives ? 'nav-links open' : 'nav-links'}>
			<div className='nav-link-close-btn-block'>
				<button
					className='nav-link-close-btn'
					onClick={() => {
						setActives(false)
						handelMenu()
					}}
				>
					<img src='/close_FILL0_wght400_GRAD0_opsz24.png' alt='' />
				</button>
			</div>
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
