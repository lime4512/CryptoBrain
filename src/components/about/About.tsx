import { Container } from '../Container'
import '../../style/about.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export const About = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
	}
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
				<div className='s'>
					<Slider {...settings}>
						<div>
							<h3>1</h3>
						</div>
						<div>
							<h3>2</h3>
						</div>
						<div>
							<h3>3</h3>
						</div>
						<div>
							<h3>4</h3>
						</div>
					</Slider>
				</div>
			</Container>
		</div>
	)
}
