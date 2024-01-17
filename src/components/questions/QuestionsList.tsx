import '../../style/questions.scss'
import { QuestionsItem } from './QuestionsItem'

export const QuestionsList = () => {
	return (
		<div className='questionsList'>
			<div className='questionsList-content'>
				<QuestionsItem />
				<QuestionsItem />
				<QuestionsItem />
				<QuestionsItem />
			</div>
			<div className='questionsList-content'>
				<QuestionsItem />
				<QuestionsItem />
				<QuestionsItem />
				<QuestionsItem />
			</div>
		</div>
	)
}
