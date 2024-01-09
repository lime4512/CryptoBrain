import { FunctionComponent } from 'react'
import '../style/totalText.scss'

interface Props {
	text: string
	title: string
}

export const TotalText: FunctionComponent<Props> = ({ title, text }) => {
	return (
		<div className='total-text-title'>
			<div className='total-futures'>
				<h1 className='total-title'>{title}</h1>
				<p className='total-text'>{text}</p>
			</div>
		</div>
	)
}
