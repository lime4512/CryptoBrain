import { ChooseItem } from './ChooseItem'
import '../../style/chooseItems.scss'
export const ChooseList = () => {
	return (
		<div className='chooseList-content'>
			<ul className='chooseList'>
				<li className='chooseList-I'>
					<ChooseItem />
				</li>
				<li className='chooseList-I'>
					<ChooseItem />
				</li>
				<li className='chooseList-I'>
					<ChooseItem />
				</li>
				<li className='chooseList-I'>
					<ChooseItem />
				</li>
			</ul>
		</div>
	)
}
