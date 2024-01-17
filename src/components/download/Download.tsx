import '../../style/download.scss'
export const Download = () => {
	return (
		<div className='download'>
			<div className='download-content'>
				<h1 className='download-title'>
					Never Miss Trading, Download Our Application
				</h1>
				<p className='download-text'>
					Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it
					to make a type specimen book.
				</p>
				<div className='download-btn-s'>
					<button className='download-btn'>
						<img
							src='/download-img-btn1.svg'
							alt=''
							className='download-btn-img'
						/>
						App Store
					</button>
					<button className='download-btn'>
						<img
							src='/download-img-btn2.svg'
							alt=''
							className='download-btn-img'
						/>
						Play Store
					</button>
					<button className='download-btn custom'>
						<img src='/download-img-btn3.svg' alt='' />
					</button>
				</div>
			</div>
			<img src='/download-img.png' alt='' />
		</div>
	)
}
