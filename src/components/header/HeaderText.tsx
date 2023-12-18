import '../../style/headerText.scss'
import { TotalBtn } from '../TotalBtn'
export const HeaderText = () => {
	return (
		<div className='header-text-content'>
			<div className='header-subTitle-content'>
				<h3 className='header-subTitle'>Crypto Brains</h3>
			</div>
			<h1 className='header-title'>
				Buy & Sell Crypto Easy With Crypto Brains
			</h1>
			<p className='header-text'>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout.
			</p>
			<div className='header-text-btn'>
				<TotalBtn>Start Now</TotalBtn>
				<button className='header-text-btn-guid'>Beginner’s Guide</button>
			</div>
		</div>
	)
}
