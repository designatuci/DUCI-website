import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Section, Space, Icon } from '../../Symbols.js';
import { Text } from '../../components';
import { Profile } from './components';
import ALUMNI_BOARD from '../../../assets/data/alumniBoard.json';
import CURRENT_BOARD from '../../../assets/data/currentBoard.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TESTIMONIALS from '../../../assets/data/boardTestimonials.json';
import './About.scss';

const About = () => (
	<>
		<Helmet>
			<title>About – Design at UCI</title>
		</Helmet>
		<div className='custom-carousel page hint'>
			<Section className='short'>
				<div className='narrow' style={{ color: 'white' }}>
					<div></div>
					<Text className='wait subtle d05'>Nice to meet you</Text>
					<Space block h='16' />
					<Text
						size='S'
						className='block-paragraph wait show scale l3 bold color white'
					>
						{"We're the premier club for UI, UX, and graphic design at the University of California Irvine."
							.split(' ')
							.map((word, i) => (
								<Text
									style={{display: 'inline-block'}}
									size='XXXL'
									key={i}
									className='wait dx l2 bold'
								>
									{word}
									<pre> </pre>
								</Text>
							))}
					</Text>
				</div>
			</Section>
		</div>
		<Section className=''>
			<Text size='XL' className='wait slim'>
				We provide a friendly space with helpful resources for students
				to become better designers.
			</Text>
			<Space block h='16' />
			<div className='split2' style={{ textAlign: 'left' }}>
				<div className='narrow wait dx'>
					<Text className='paragraph middle'>
						Whether they're just starting out, or have been
						designing for several years. Through community,
						education, and collaboration, we strive to find
						meaningful ways to support and foster a design
						community.
					</Text>
					<Space block h='32' />
					<Link to='/resources/' className='color blue'>
						<Text icon='right'>View resources</Text>
					</Link>
				</div>
				<div className='narrow wait dx'>
					<Text className='paragraph middle'>
						Design at UCI meets once a week for a general meeting on
						most weeks while the academic quarter is in session.
						Join us on our social media pages and newsletter to get
						the latest updates regarding workshops, meetings and
						events. We can't wait to meet you!
					</Text>
					<Space block h='32' />
					<Link to='/events/' className='color blue'>
						<Text icon='right'>View events</Text>
					</Link>
				</div>
				<div className='narrow wait'>
					<Text className='paragraph middle'>
						There are no requirements to join, everyone is welcome
						to attend our meetings and use the resources we provide.
						Although some events may be exclusive to UCI students,
						we also host events with participants around the globe.
					</Text>
					<Space block h='32' />
					<Link to='/join/' className='color blue'>
						<Text icon='right'>Join for notifications</Text>
					</Link>
				</div>
			</div>
		</Section>
		<Section className='short fill color gray'>
			<h2 style={{textAlign: 'center', marginTop: '50px'}}>From our board</h2>
			<Carousel showStatus={false} showThumbs={false}>
				{TESTIMONIALS.map(({quote, name}) => (
					<div key={quote} className="quote">
						<p>{quote}</p>
						<span>- {name}</span>
					</div>
				))}
            </Carousel>
		</Section>
		<Section className='board center'>
			<Text size='XL'>Board Members</Text>
			<div className='center row'>
				{CURRENT_BOARD.map((member, i) => (
					<Profile key={i} data={member} />
				))}
			</div>
			<Text size='XL' className='alumni-header'>
				Board Alumni
			</Text>
			<div className='center row'>
				{ALUMNI_BOARD.map(({ year, members }) => (
					<Fragment key={year}>
						<Text className='color blue year-divider'>
							Departed {year}
						</Text>
						{members.map((member, i) => (
							<Profile key={i} textOnly data={member} />
						))}
					</Fragment>
				))}
			</div>
		</Section>
		<Section className='short center fill color gray'>
			<Text>Partners</Text>
			<div className='split3' style={{ columnGap: '128px' }}>
				<a target='noreferer' href='https://www.ics.uci.edu/'>
					<Icon w='256' h='128' src='logo-uci.svg' />
				</a>
				<a target='noreferer' href='https://www.sketch.com/'>
					<Icon w='256' h='128' src='logo-sketch.svg' />
				</a>
				<div className='center'>
					<Link to='/contact/'>
						<Text>Want to work with us?</Text>
					</Link>
				</div>
			</div>
		</Section>
	</>
);

export default About;
