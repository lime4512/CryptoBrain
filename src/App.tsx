import { NavBar } from './components/nav/NavBar'
import { Header } from './components/header/Header'
import { Container } from './components/Container'
import './style/App.scss'
import { MarketTrends } from './components/marketTrends/MarketTrends'
import { Trading } from './components/trading/Trading'
import { Choose } from './components/choose/Choose'
import { About } from './components/about/About'
import { Download } from './components/download/Download'
import { Questions } from './components/questions/Questions'
import { Footer } from './components/footer/Footer'

function App() {
	return (
		<div className='root'>
			<NavBar />
			<Container>
				<Header />
				<MarketTrends />
			</Container>
			<Trading />
			<Choose />
			<About />
			<Download />
			<Questions />
			<Footer />
		</div>
	)
}

export default App
