import { Container } from '../Container'
import '../../style/about.scss'
import { SliderSimple } from './SliderSimple'

export const About = () => {
	return (
		<div className='about'>
			<Container>
				<div className='about-text-content'>
					<h1 className='about-title'>What Traders Saying About Us! </h1>
					<p className='about-text'>
						Lorem Ipsum has been the industry's standard dummy text since the
						1500s, when an unknown printer took a galley of type and scrambled
						type specimen book.
					</p>
				</div>
				<SliderSimple />
			</Container>
		</div>
	)
}
