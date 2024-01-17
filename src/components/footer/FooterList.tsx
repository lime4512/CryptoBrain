import '../../style/footerList.scss'
export const FooterList = () => {
	return (
		<div className='footerList'>
			<ul className='footerList-list'>
				<li className='footerList-item-title'>Crypto Brains</li>
				<li className='footerList-item'>About Us</li>
				<li className='footerList-item'>Our Team</li>
				<li className='footerList-item'>Road Map</li>
				<li className='footerList-item'>Risk Disclosure</li>{' '}
			</ul>

			<ul className='footerList-list'>
				<li className='footerList-item-title'>Knowledge</li>
				<li className='footerList-item'>F.A.Q.</li>
				<li className='footerList-item'>Articals</li>
				<li className='footerList-item'>Video Tutorial</li>
				<li className='footerList-item'>Beginner’s Guide</li>
			</ul>

			<ul className='footerList-list'>
				<li className='footerList-item-title'>Services</li>
				<li className='footerList-item'>API Service</li>
				<li className='footerList-item'>Token Listing</li>
				<li className='footerList-item'>API Document</li>
				<li className='footerList-item'>Ticket Services</li>
			</ul>

			<ul className='footerList-list'>
				<li className='footerList-item-title'>Exchange</li>
				<li className='footerList-item'>P2P</li>
				<li className='footerList-item'>Referral</li>
				<li className='footerList-item'>Markets</li>
				<li className='footerList-item'>Affiliate Program</li>
			</ul>

			<ul className='footerList-list'>
				<li className='footerList-item-title'>Support Sevice</li>
				<li className='footerList-item custom-li'>
					Career <div className='hiring'>( We Are Hiring )</div>
				</li>
				<li className='footerList-item'>Comunity</li>
				<li className='footerList-item'>Customer Chat</li>
				<li className='footerList-item'>Technical Support</li>
			</ul>

			<ul className='footerList-list'>
				<li className='footerList-item-title'>Press</li>
				<li className='footerList-item'>Blog</li>
				<li className='footerList-item'>News</li>
				<li className='footerList-item'>Events</li>
			</ul>
		</div>
	)
}
