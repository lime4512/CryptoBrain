import '../../style/header.scss'
import { HeaderText } from './HeaderText'
import { Market } from './market/Market'
export const Header = () => {
	return (
		<header>
			<div className='header-content'>
				<HeaderText />
				<div className='header-img'>
					<img className='total-img' src='/SVG.png' alt='' />
				</div>
			</div>
			<Market />
		</header>
	)
}
