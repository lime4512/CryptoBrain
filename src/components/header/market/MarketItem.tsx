import '../../../style/marketItem.scss'

interface Props {
	textCrypto: string
	text2Crypto: string
	img: string
	percent: string
	price: string
}

export const MarketItem: React.FunctionComponent<Props> = ({
	textCrypto,
	text2Crypto,
	img,
	percent,
	price,
}) => {
	return (
		<div className='market-item'>
			<div className='text-crypto-item'>
				<span className='name-crypto-item'>
					{textCrypto} / {text2Crypto}
				</span>
				<div className='forecast-crypto-item'>
					<img src={img} alt='' className='img-crypto-item' />
					<span className='percent-crypto-item'>{percent}%</span>
				</div>
			</div>
			<span className='price-crypto-item'>₹ {price}</span>
		</div>
	)
}
