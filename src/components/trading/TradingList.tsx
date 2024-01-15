import '../../style/trading.scss'

import { TradingItem } from './TradingItem'

export const TradingList = () => {
	return (
		<div className='tradingList'>
			<TradingItem
				imgIcons='/Component1.svg'
				imgColor=''
				title='Create Account'
				text='Lorem Ipsum is simply dummy text of the 
printing and typesetting industry.'
				btn='Sign Up Now'
			/>
			<TradingItem
				imgIcons='/Component2.svg'
				imgColor='fel'
				title='Verify Bank Account'
				text='Lorem Ipsum is simply dummy text of the 
printing and typesetting industry.'
				btn='Verify Now'
			/>
			<TradingItem
				imgIcons='/Component3.svg'
				imgColor='gre'
				title='Add Fund in Wallet'
				text='Lorem Ipsum is simply dummy text of the 
printing and typesetting industry.'
				btn='Add Now'
			/>
			<TradingItem
				imgIcons='/Component4.svg'
				imgColor='reds'
				title='Start Trading'
				text='Lorem Ipsum is simply dummy text of the 
printing and typesetting industry.'
				btn='Start Now'
			/>
		</div>
	)
}
