import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { EmailForm, Text } from 'app/components';
import { Section, Space, Icon, PageIcon } from 'app/Symbols.js';
import SHORT_SOCIALS from 'assets/data/shortSocials.json';

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
				{SHORT_SOCIALS.map(social => (
					<a
						key={social.link}
						target='_blank'
						rel='noopener noreferrer'
						href={social.link}
						className='wait dx card L slim flex relative spaceChildrenSmall'
						style={social.bg}
					>
						<PageIcon
							color={social.color}
							style={{
								width: '32px',
								height: '32px',
								position: 'absolute',
								top: '32px',
								right: '32px',
							}}
						/>
						<Icon w='48' h='48' src={social.icon} />
						<Text className='bold' size='L'>
							{social.name}
						</Text>
					</a>
				))}
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
