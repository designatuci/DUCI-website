import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Section, Space, Icon, Photo } from '../Symbols.js';
import { Text } from '../components';

const Designathons = () => (
	<>
		<Helmet>
			<title>Design-a-thons – Design at UCI</title>
		</Helmet>
		<Section className='center short'>
			<div className='wait dx scale flex row'>
				<Icon w='64' h='64' src='designathon-logo.svg' />
				<Space w='32' block />
				{/* <Text size="S" className="bold color wait dx scale">The Design at UCI</Text> */}
				<Text size='XL' className='bold color black'>
					Design-a-thon at UCI
				</Text>
			</div>
			<Space h='16' />
			<div className='split2 textAlignLeft slim'>
				<div className='flex left slim spaceChildrenSmall'>
					<Text className='color gray'>
						A large-scale event where teams work to design a
						prototype product within a few days.
					</Text>
					<Text className='color gray'>
						To get involved,{' '}
						<Link to='/join/'>
							join us
						</Link>{' '}
						to get notifications about when the next applications
						come out!
					</Text>
				</div>
				<div className='flex left slim spaceChildrenSmall'>
					<Text className='color gray'>
						Our Design-a-thon is held once per year, and is open to
						everyone. Bring your team or form one during the event,
						and compete to create the best design centered around
						the prompt. Additionally, you can attend workshops
						hosted during the event to get extra help and
						inspiration from industry professionals.
					</Text>
				</div>
			</div>
		</Section>
		<Section
			className='center fill black'
			style={{
				background:
					'url(/static/photo/pulse.jpg) center/cover no-repeat',
			}}
		>
			<Link to='/designathon22/' className='flex spaceChildren'>
				<Space h='96' />
				<Text className='bold'>Design-a-thon 2022</Text>
				<Text size='XXL' className='bold'>
					Impact 2022
				</Text>
				<Text className='bold'>January 28-30</Text>
				<Space h='32' />
					<Text className='button' color='blue' icon='right'>Event Page</Text>
			</Link>
		</Section>
		<Section
			className='short'
			style={{
				background:
					'linear-gradient(0deg,var(--white) 50%,var(--silver) 150%',
			}}
		>
			<div className='split2'>
				<div className='flex left top spaceChildrenSmall'>
					<Text size='XL' className='bold'>
						Design-a-thon 2021
					</Text>
					<Space h='16' />
					<Text
						size='S'
						className='color blue'
						style={{ marginBottom: '8px' }}
					>
						Theme
					</Text>
					<Text className='color gray'>
						Mindfulness & Productivity
					</Text>
					<Text
						size='S'
						className='color blue'
						style={{ marginBottom: '8px' }}
					>
						Participants
					</Text>
					<Text className='color gray'>100+</Text>
				</div>
				<div
					className='card L fill white shadow'
					style={{ minHeight: '256px', padding: '16px' }}
				>
					<a
						className='relative fill white button shadow'
						href='/static/designathon2020/index.html'
						target='_blank'
					>
						<Text icon='right' color='blue'>Event Page</Text>
					</a>
					<Photo
						className='background'
						src='designathon2020thumb.svg'
					/>
				</div>
			</div>
			<Text size='L'>Awarded Entries</Text>
			<div className='split2'>
				<div className='card shadow flex spaceChildrenSmall'>
					<Text
						className='color blue'
						style={{ alignSelft: 'flex-start' }}
					>
						Best Overall
					</Text>
					<div className='card' style={{ width: '100%' }}>
						<Photo
							src='img-motivator.svg'
							className='shadow'
							style={{ minHeight: '256px' }}
						></Photo>
					</div>
					<Text size='L'>Motivator</Text>
					<Text className='color gray'>
						Created by Allison Yick, Jonathan Lum, and Stephanie
						Chang
					</Text>
					<a
						href='https://www.figma.com/file/h5bJ9LHNDm1K3PYy0Ck1wk/UCI-Designathon-–-Team-396D84-Copy?node-id=85%3A0'
						target='noreferer'
					>
						<Text icon='right' color='blue'>
							View prototype
						</Text>
					</a>
				</div>
				<div className='card shadow flex spaceChildrenSmall'>
					<Text
						className='color blue'
						style={{ alignSelft: 'flex-start' }}
					>
						Honorable Mention
					</Text>
					<div className='card' style={{ width: '100%' }}>
						<Photo
							src='img-orin.svg'
							className='shadow'
							style={{ minHeight: '256px' }}
						></Photo>
					</div>
					<Text size='L'>Orin</Text>
					<Text className='color gray'>Created by Isha Godara</Text>
					<a
						href='https://www.figma.com/file/uYMb1cJIA0JCn2twIbbIUE/Orin-Copy'
						target='noreferer'
					>
						<Text icon='right' color='blue'>
							View prototype
						</Text>
					</a>
				</div>
			</div>
		</Section>
	</>
);

export default Designathons;
