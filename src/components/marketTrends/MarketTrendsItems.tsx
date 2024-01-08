import '../../style/MarketTrendsItems.scss'

export const MarketTrendsItems = () => {
	return (
		<div className='marketTrends-card-content'>
			<img
				src='/Market-btc.svg'
				alt=''
				className='marketTrends-card-total-img'
			/>
			<h2 className='marketTrends-card-title'>Bitcoin / BTC</h2>
			<div className='marketTrends-card-arrow'>
				<img src='/arrow-green.svg' alt='' />
				<span className='marketTrends-card-percent'>5.76%</span>
			</div>
			<h2 className='marketTrends-card-price'>₹ 28,214,25.341</h2>
			<img
				src='/public/Property1=Up.png'
				alt=''
				className='marketTrends-card-schedule'
			/>
		</div>
	)
}
