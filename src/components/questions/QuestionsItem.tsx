import { useState } from 'react'
import '../../style/questions.scss'

export const QuestionsItem = () => {
	const [active, setActive] = useState(false)
	return (
		<div className='questionsItem'>
			<div className='questionsItem-title'>
				What is the difference between Defi and Metaverse ?
				{active ? (
					<img
						src='/questions-img1.svg'
						alt=''
						className='questionsItem-img rotate'
						onClick={() => {
							setActive(false)
						}}
					/>
				) : (
					<img
						src='/questions-img1.svg'
						alt=''
						className='questionsItem-img'
						onClick={() => {
							setActive(true)
						}}
					/>
				)}
			</div>

			<p className={active ? 'questionsItem-text opens' : 'questionsItem-text'}>
				When an unknown printer took a galley of type and scrambled it to make a
				type specimen book. It has survived not only five centuries, but also
				the leap into electronic typesetting, remaining essentially unchanged.
			</p>
		</div>
	)
}
