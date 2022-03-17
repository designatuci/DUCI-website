import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Section, Text, Icon, PageIcon } from '../Symbols.js';
import { EmailForm } from '../EmailForm.js';

const Join = () => (
	<>
		<Helmet>
			<title>Join – Design at UCI</title>
		</Helmet>
		<Section className='center short bareBot'>
			<Text size='XXL' className='wait scale show rainbow l3'>
				<Text size='XXL' className='wait dx bold color blue'>
					Get Involved
				</Text>
			</Text>
			<Text className='color orange wait dx show subtle'>
				Design at UCI is free for everyone
			</Text>
			<Text className='color gray slim wait dx  show subtle'>
				Join our newsletter and follow our social media to get
				notifications about what's happening.
				<br />
				Then get invovled with what interests you!
			</Text>
		</Section>
		<Section className='center short bareBot'>
			<div
				className='wait show card L fill sky slim flex spaceChildren'
				style={{ boxShadow: '0 12px 24px -12px var(--sky)' }}
			>
				<Text className='bold color blue' size='L'>
					Newsletter Sign-up
				</Text>
				<EmailForm />
			</div>
			<div className='split4 slim maxWidth' style={{ gap: '32px' }}>
				<a
					target='noreferer'
					href='https://www.tiktok.com/@design_at_uci'
					className='wait dx card L slim flex relative spaceChildrenSmall'
					style={{
						boxShadow: '0 12px 24px -12px #e8eaff',
						color: 'white',
						background: 'black',
					}}
				>
					<PageIcon
						color='var(--gray)'
						style={{
							width: '32px',
							height: '32px',
							position: 'absolute',
							top: '32px',
							right: '32px',
						}}
					/>
					<Icon w='48' h='48' src='tiktok-color.svg'></Icon>
					<Text className='bold' size='L'>
						TikTok
					</Text>
				</a>
				<a
					target='noreferer'
					href='https://www.instagram.com/designatuci'
					className='wait dx card L slim flex relative spaceChildrenSmall'
					style={{
						boxShadow: '0 12px 24px -12px #FEDDC7',
						color: '#C73457',
						background:
							'linear-gradient(-120deg,#FFEFC6,#FFC3BA,#FFC9E5)',
					}}
				>
					<PageIcon
						color='#C73457'
						style={{
							width: '32px',
							height: '32px',
							position: 'absolute',
							top: '32px',
							right: '32px',
						}}
					/>
					<Icon w='48' h='48' src='Logo-Instagram-Color.svg'></Icon>
					<Text className='bold' size='L'>
						Instagram
					</Text>
				</a>
				<a
					target='noreferer'
					href='https://discord.com/invite/MBVrKe9'
					className='wait dx card L slim flex relative spaceChildrenSmall'
					style={{
						boxShadow: '0 12px 24px -12px #e8eaff',
						color: '#5865F2',
						background: '#e8eaff',
					}}
				>
					<PageIcon
						color='#C73457'
						style={{
							width: '32px',
							height: '32px',
							position: 'absolute',
							top: '32px',
							right: '32px',
						}}
					/>
					<Icon w='48' h='48' src='Discord-Logo-Color.svg'></Icon>
					<Text className='bold' size='L'>
						Discord
					</Text>
				</a>
				<a
					target='noreferer'
					href='https://www.linkedin.com/company/design-at-uci/'
					className='wait dx card L slim flex relative spaceChildrenSmall'
					style={{
						boxShadow: '0 12px 24px -12px #B3D6EA',
						color: '#0077B7',
						background: '#B3D6EA',
					}}
				>
					<PageIcon
						color='#0077B7'
						style={{
							width: '32px',
							height: '32px',
							position: 'absolute',
							top: '32px',
							right: '32px',
						}}
					/>
					<Icon w='48' h='48' src='LinkedIn-Color.svg'></Icon>
					<Text className='bold' size='L'>
						LinkedIn
					</Text>
				</a>
			</div>
		</Section>
		<Section className='center'>
			<Text className='wait scale dx' size='XL'>
				We can't wait to see you at our next event!
			</Text>
			<Link className='wait dx' to='/events/'>
				<Text className='color blue pagelink'>
					Check out our events tab
				</Text>
			</Link>
			<Link className='wait dx' to='/resources/'>
				<Text className='color blue pagelink'>
					Explore our other resources
				</Text>
			</Link>
		</Section>
	</>
);

export default Join;
