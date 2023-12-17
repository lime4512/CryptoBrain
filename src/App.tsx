import { NavBar } from './components/nav/NavBar'
import { Header } from './components/header/Header'
import { Container } from './components/Container'
import './style/App.scss'

function App() {
	return (
		<div className='root'>
			<NavBar />
			<Container>
				<Header />
			</Container>
		</div>
	)
}

export default App
