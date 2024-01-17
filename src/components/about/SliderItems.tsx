import '../../style/sliderItems.scss'

export const SliderItems = () => {
	return (
		<div className='sliderItem'>
			<div className='user-content'>
				<img src='/WesternMan.png' alt='' className='user-img' />
				<div className='user-text'>
					<h3 className='user-name'>John Doe</h3>
					<p className='user-country'>USA, America</p>
				</div>
				<img src='/User-img-commas.svg' alt='' className='user-comma' />
			</div>
			<div className='sliderItem-text'>
				“ Lorem Ipsum has been the industry's standard dummy text ever since the
				1500s, when an unknown printer took a galley of type and scrambled it to
				make a type specimen book. ”
			</div>
		</div>
	)
}
