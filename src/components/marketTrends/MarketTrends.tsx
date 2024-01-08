import { MarketTrendsItems } from './MarketTrendsItems'
import { TotalBtn } from '../TotalBtn'
import '../../style/marketTrends.scss'

export const MarketTrends = () => {
	return (
		<div className='market'>
			<div className='marketTrends-title'>
				<h1 className='marketTrends-text'>Market Trends</h1>
				<ul className='marketTrends-nav'>
					<li className='marketTrends-nav-item'>All</li>
					<li className='marketTrends-nav-item'>Top Gainers</li>
					<li className='marketTrends-nav-item'>Top Losers</li>
					<li className='marketTrends-nav-item'>New Listing</li>
					<li className='marketTrends-nav-item'>Defi</li>
					<li className='marketTrends-nav-item'>Metaverse</li>
				</ul>
			</div>
			<div className='marketTrends-list'>
				<MarketTrendsItems />
				<MarketTrendsItems />
				<MarketTrendsItems />
				<MarketTrendsItems />
				<MarketTrendsItems />
				<MarketTrendsItems />
			</div>
			<div className='marketTrends-btn'>
				<TotalBtn>See All Market</TotalBtn>
			</div>
		</div>
	)
}
