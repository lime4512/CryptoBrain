import '../style/TotalBtn.scss'
export const TotalBtn = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='totalBtn'>
			{children}
			<img src='/total-img.svg' alt='' className='img-totalBtn' />
		</div>
	)
}
