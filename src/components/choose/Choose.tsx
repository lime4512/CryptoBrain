import { TotalText } from '../TotalText'
import { ChooseList } from './ChooseList'
import { Container } from '../Container'
import '../../style/choose.scss'
export const Choose = () => {
	return (
		<div className='choose'>
			<Container>
				<div className='choose-text'>
					<TotalText
						title='Why Choose Crypto Brains!'
						text='When an unknown printer took a galley of type and scrambled it to make a type specimen book.'
					/>
				</div>
				<div className='choose-content'>
					<ChooseList />
					<img src='/choose-img.png' alt='' />
				</div>
			</Container>
		</div>
	)
}
