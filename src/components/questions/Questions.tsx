import { Container } from '../Container'
import { TotalText } from '../TotalText'
import '../../style/questions.scss'
import { QuestionsList } from './QuestionsList'
export const Questions = () => {
	return (
		<section className='questions'>
			<Container>
				<TotalText
					title='Frequently Asked Questions'
					text='When an unknown printer took a galley of type and scrambled it to make a type specimen book.'
				/>
				<QuestionsList />
			</Container>
		</section>
	)
}
