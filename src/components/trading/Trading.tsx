import { Container } from '../Container'
import { TotalText } from '../TotalText'
import { TradingList } from './TradingList'
import '../../style/trading.scss'
export const Trading = () => {
	return (
		<section className='trading'>
			<Container>
				<div className='trading-text'>
					<TotalText
						title='Start Trading In Simple Process'
						text='Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
					/>
				</div>
				<TradingList />
			</Container>
		</section>
	)
}
