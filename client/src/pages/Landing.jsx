import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				{/* info */}
				<div className='info'>
					<h1>
						Weave Your <span>Career Connections</span>
					</h1>
					<p>
						Welcome to Jobify – Your Path to Career Excellence!
						<br /> 🌟 Unlock Your Potential, Ignite Your Career <br />
						🚀 Discover a world of job opportunities, nurture your network, and
						access expert guidance. Join the journey now! <br />
						🔥 Elevate your career prospects. <br />
						💌 Stay tuned for valuable updates.
					</p>
					<Link to='/register' className='btn register-link'>
						Register
					</Link>
					<Link to='/login' className='btn'>
						Login / Demo User
					</Link>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;
