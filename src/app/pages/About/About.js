import { Helmet } from 'react-helmet';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Section, Photo, Text, Space, Icon } from '../../Symbols.js';
import ALUMNI_BOARD from '../../../assets/data/alumniBoard.json';
import CURRENT_BOARD from '../../../assets/data/currentBoard.json';
import './About.scss';

const About = () => (
	<>
		<Helmet>
			<title>About – Design at UCI</title>
		</Helmet>
		<div className='carousel page hint'>
			<Section className='short'>
				<div className='narrow' style={{ color: 'white' }}>
					<div></div>
					<Text className='wait subtle d05'>Nice to meet you</Text>
					<Space block h='16' />
					<Text
						size='XXXL'
						className='block-paragraph wait show scale l3 bold color white'
					>
						{"We're the premier club for UI, UX, and graphic design at the University of California Irvine."
							.split(' ')
							.map(word => (
								<Text size='XXXL' className='wait dx l2 bold'>
									{word}
									<pre> </pre>
								</Text>
							))}
					</Text>
				</div>
			</Section>
		</div>
		<img src='/static/photo/img1.png' alt='banner' />
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
						<Text className='pagelink'>View resources</Text>
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
						<Text className='pagelink'>View events</Text>
					</Link>
				</div>
				<div className='narrow wait'>
					<Text className='paragraph middle'>
						There are no requirements to join, everyone is welcome
						to attend our meetings and use the resources we provide.
						Although some events may be exlcusive to UCI students,
						we also host events with participants around the globe.
					</Text>
					<Space block h='32' />
					<Link to='/join/' className='color blue'>
						<Text className='pagelink'>Join for notifications</Text>
					</Link>
				</div>
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
		<Section className='board center'>
			<div style={{ marginBottom: '64px' }}>
				<Text size='XL'>Board Members</Text>
			</div>
			<div className='center row'>
				{CURRENT_BOARD.map(({ photo, name, position, links }) => (
					<div className={clsx('item center column')}>
						<Photo src={`portrait/${photo}`}>
							<div />
						</Photo>
						<Text size='L'>{name}</Text>
						<Text
							className='color gray'
							style={{ marginTop: '8px' }}
						>
							{position}
						</Text>
						<div className='flex row' style={{ marginTop: '4px' }}>
							{links?.map(({ type, href }) => (
								<a
									target='noreferer'
									href={href}
									style={{ padding: '4px' }}
								>
									<Icon
										hoverable
										src={`nav-${type}.svg`}
										w='20'
										h='20'
									/>
								</a>
							))}
						</div>
					</div>
				))}
			</div>
			<Space block h='8' />
			<div style={{ marginBottom: '64px' }}>
				<Text size='XL'>Board Alumni</Text>
			</div>
			<div className='center row'>
				{ALUMNI_BOARD.map(({ year, members }) => (
					<>
						<div className='year-divider'>
							<Text className='color blue'>Departed {year}</Text>
						</div>
						{members.map(({ links, name, position }, i) => (
							<div className='item center column' key={i}>
								<Text size='L'>{name}</Text>
								<br />
								<Text
									className='color gray'
									style={{ marginTop: '8px' }}
								>
									{position}
								</Text>
								<div
									className='flex row'
									style={{ marginTop: '4px' }}
								>
									{links?.map(({ type, href }) => (
										<a
											target='noreferer'
											href={href}
											style={{
												padding: '4px',
											}}
										>
											<Icon
												hoverable
												src={`nav-${type}.svg`}
												w='20'
												h='20'
											/>
										</a>
									))}
								</div>
							</div>
						))}
					</>
				))}
			</div>
		</Section>
	</>
);

export default About;
