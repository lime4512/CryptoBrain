import '../../style/chooseItems.scss'
export const ChooseItem = () => {
	return (
		<div className='chooseItem'>
			<h1 className='chooseItem-num'>01</h1>
			<div className='chooseItem-text-content'>
				<h2 className='chooseItem-title'>Easy Trading</h2>
				<p className='chooseItem-text'>
					It was popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages.
				</p>
			</div>
			<button className='chooseItem-btn'>
				Start Now <img src='/arrow.svg' alt='' />
			</button>
		</div>
	)
}
