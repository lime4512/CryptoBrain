import '../../style/navLink.scss'
export const NavLink = () => {
	return (
		<div className='nav-links'>
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
					<a href='' className='nav-link-item'>
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
