import Slider from 'react-slick'
import '../../style/sliderSimple.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SliderItems } from './SliderItems'

export const SliderSimple = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		variableWidth: true,
	}
	return (
		<div className='sliderSimple'>
			<Slider {...settings}>
				<SliderItems />
				<SliderItems />
				<SliderItems />
				<SliderItems />
			</Slider>
		</div>
	)
}
