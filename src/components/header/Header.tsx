import '../../style/header.scss'
import { HeaderText } from './HeaderText'
import { Market } from './market/Market'
export const Header = () => {
	return (
		<header>
			<div className='header-content'>
				<img className='total-img' src='/SVG.png' alt='' />
				<HeaderText />
			</div>
			<Market />
		</header>
	)
}
