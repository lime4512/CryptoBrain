import { NavBar } from './components/nav/NavBar'
import { Header } from './components/header/Header'
import { Container } from './components/Container'
import './style/App.scss'
import { MarketTrends } from './components/marketTrends/MarketTrends'
import { Trading } from './components/trading/Trading'

function App() {
	return (
		<div className='root'>
			<NavBar />
			<Container>
				<Header />
				<MarketTrends />
			</Container>
			<Trading />
		</div>
	)
}

export default App
