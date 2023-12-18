import '../../style/header.scss'
import { HeaderText } from './HeaderText'
export const Header = () => {
	return (
		<header>
			<HeaderText />
			<div className='header-img'>
				<img className='total-img' src="/SVG.png" alt="" />
			</div>
		</header>
	)
}
