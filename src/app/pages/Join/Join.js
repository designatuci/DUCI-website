import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Section, Icon, PageIcon } from '../../Symbols.js';
import { EmailForm, Text } from '../../components';
import SHORT_SOCIALS from '../../../assets/data/shortSocials.json';
import cn from './Join.module.scss';

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
			<Text color='orange' className='wait dx show subtle'>
				Design at UCI is free for everyone
			</Text>
			<Text color='gray' className='slim wait dx show subtle'>
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
				<Text color='blue' className='bold' size='L'>
					Newsletter Sign-up
				</Text>
				<EmailForm />
			</div>
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
							className={cn.icon}
						/>
						<Icon w='48' h='48' src={social.icon} />
						<Text className='bold' size='L'>
							{social.name}
						</Text>
					</a>
				))}
			</div>
		</Section>
		<Section className='center'>
			<Text className='wait scale dx' size='XL'>
				We can't wait to see you at our next event!
			</Text>
			<Link className='wait dx' to='/events'>
				<Text icon='right' color='blue'>
					Check out our events tab
				</Text>
			</Link>
			<Link className='wait dx' to='/resources'>
				<Text icon='right' color='blue'>
					Explore our other resources
				</Text>
			</Link>
		</Section>
	</>
);

export default Join;
