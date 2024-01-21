import { MarketTrendsItems } from './MarketTrendsItems'
import { TotalBtn } from '../TotalBtn'
import '../../style/marketTrends.scss'

export const MarketTrends = () => {
	return (
		<section className='market'>
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
				<MarketTrendsItems
					coinImg='/Market-btc.svg'
					coinName='Bitcoin / BTC'
					coinPrice='420.83'
					coinArrow='/arrow-green.svg'
				/>
				<MarketTrendsItems
					coinImg='/Market-BTS.svg'
					coinName='BTS / BTC'
					coinPrice='420.83'
					coinArrow='/arrow-red.svg'
				/>
				<MarketTrendsItems
					coinImg='/Market-DGD.svg'
					coinName='DGD / BTC'
					coinPrice='420.83'
					coinArrow='/arrow-red.svg'
				/>
				<MarketTrendsItems
					coinImg='/Market-Ethos.svg'
					coinName='Ethos / BTC'
					coinPrice='420.83'
					coinArrow='/arrow-green.svg'
				/>
				<MarketTrendsItems
					coinImg='/Market-KMD.svg'
					coinName='KMD / BTC'
					coinPrice='420.83'
					coinArrow='/arrow-green.svg'
				/>
				<MarketTrendsItems
					coinImg='/Market-Etp.svg'
					coinName='Etp / BTC'
					coinPrice='420.83'
					coinArrow='/arrow-red.svg'
				/>
			</div>
			<div className='marketTrends-btn'>
				<TotalBtn>See All Market</TotalBtn>
			</div>
		</section>
	)
}
