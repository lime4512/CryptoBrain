import { FunctionComponent } from 'react'
import '../../style/tradingItem.scss'
interface Props {
	imgIcons: string
	imgColor: string
	title: string
	text: string
	btn: string
}

export const TradingItem: FunctionComponent<Props> = ({
	imgIcons,
	imgColor,
	title,
	text,
	btn,
}) => {
	return (
		<div className='tradingItem'>
			<div className={'tradingItem-icons ' + imgColor}>
				<img src={imgIcons} alt='' />
			</div>
			<h3 className='tradingItem-title'>{title}</h3>
			<p className='tradingItem-text'>{text}</p>
			<button className='tradingItem-btn'>
				{btn}
				<img src='/arrow.svg' alt='' className='tradingItem-btn-arrow' />
			</button>
		</div>
	)
}
