import { Container } from '../Container'
import '../../style/footer.scss'
import { FooterList } from './FooterList'
export const Footer = () => {
	return (
		<footer>
			<Container>
				<div className='footer-logo'>
					<img src='/Logo-footer.png' alt='' />
					<div className='footer-community'>
						<span className='community-text'>Community-</span>
						<img src='/ds.svg' alt='' />
						<img src='/tg.svg' alt='' />
						<img src='/inst.svg' alt='' />
						<img src='/in.svg' alt='' />
						<img src='/you.svg' alt='' />
					</div>
				</div>
				<FooterList />
				<div className='footer-text'>
					<div className='copyright'>
						<p>©Copyright 2022 All Rights Are Reserved.</p>
						<img src='/dots-footer.svg' alt='' />
						<p>Privacy Policy</p>
						<img src='/dots-footer.svg' alt='' />
						<p>Terms of Use</p>
					</div>

					<div className='footer-selector-content'>
						<div className='footer-selector'>
							English <img src='/footer-arrow.svg' alt='' />
						</div>
						<div className='footer-selector'>
							INR <img src='/footer-arrow.svg' alt='' />
						</div>
					</div>
				</div>
			</Container>
		</footer>
	)
}
