import { FunctionComponent } from 'react'
import '../../style/marketTrendsItems.scss'
interface Props {
	coinImg: string
	coinName: string
	coinPrice: string
	coinArrow: string
}

export const MarketTrendsItems: FunctionComponent<Props> = ({
	coinImg,
	coinName,
	coinPrice,
	coinArrow,
}) => {
	return (
		<div className='marketTrends-card-content'>
			<img src={coinImg} alt='' className='marketTrends-card-total-img' />
			<h2 className='marketTrends-card-title'>{coinName}</h2>
			<div className='marketTrends-card-arrow'>
				<img src={coinArrow} alt='' />
				<span
					className={
						coinArrow == '/arrow-red.svg'
							? 'marketTrends-card-percent red'
							: 'marketTrends-card-percent'
					}
				>
					5.76%
				</span>
			</div>
			<h2 className='marketTrends-card-price'>₹ {coinPrice}</h2>
			<img
				src={
					coinArrow == '/arrow-red.svg'
						? '/Property2=Down.png'
						: '/Property1=Up.png'
				}
				alt=''
				className='marketTrends-card-schedule'
			/>
		</div>
	)
}
