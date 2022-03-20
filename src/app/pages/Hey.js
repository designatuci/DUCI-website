import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Section, Space, Icon, PageIcon } from '../Symbols.js';
import { EmailForm, Text } from '../components';

const Hey = () => (
	<>
		<Helmet>
			<title>Hey – Design at UCI</title>
		</Helmet>
		<Section className='center short'>
			<Text size='XL' className='wait show rainbow bold color blue'>
				Hello, there
			</Text>
			<Link
				to='/'
				className='wait dx card L slim flex'
				style={{ boxShadow: '0 0 1px 1px #eee, 0 12px 24px -2px #eee' }}
			>
				<Icon w='32' h='32' src='logo.svg'></Icon>
				<Space h='32' />
				<Text className='bold' size='L'>
					Website
				</Text>
				<Space h='4' />
				<Text className='color gray'>designatuci.com</Text>
			</Link>
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
			<div
				className='wait show card L fill sky slim flex spaceChildren'
				style={{ boxShadow: '0 12px 24px -12px var(--sky)' }}
			>
				<Text className='bold color blue' size='L'>
					Newsletter Sign-up
				</Text>
				<EmailForm />
			</div>
			<a
				target='noreferer'
				href='https://forms.gle/5P4Hq6egXJvBU76G8'
				className='wait card L slim flex relative'
				style={{
					boxShadow: '0 12px 24px -12px var(--gray)',
					color: 'var(--white)',
					background: 'var(--black)',
				}}
			>
				<Text className='bold' size='L'>
					Sticker Order Form
					<PageIcon
						color='var(--white)'
						style={{ width: '24px', height: '24px' }}
					/>
				</Text>
			</a>
			<a
				target='noreferer'
				href='https://blacklivesmatters.carrd.co/?ltclid='
				className='wait card L slim flex relative'
				style={{
					boxShadow: '0 12px 24px -12px var(--gray)',
					color: 'var(--white)',
					background: 'var(--black)',
				}}
			>
				<Text className='bold' size='L'>
					Ways to Help the BLM Movement{' '}
					<PageIcon
						color='var(--white)'
						style={{ width: '24px', height: '24px' }}
					/>
				</Text>
			</a>
		</Section>
	</>
);

export default Hey;
