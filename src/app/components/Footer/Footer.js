import { memo } from 'react';
import { Link } from 'react-router-dom';

import { Text } from 'app/components';
import { Section, Icon, Space } from 'app/Symbols';
import socials from 'assets/data/socials.json';

import cn from './Footer.module.scss';

const Footer = () => (
	<Section className={`short ${cn.footer}`}>
		<div className='split3'>
			<div style={{ color: 'white' }}>
				<Link to='/'>
					<Icon w='24' h='24' src='logo.svg' />
					<Space w='12' />
					<Text>Design at UCI</Text>
				</Link>
				<Space block h='48' />
				<div className='spaceChildrenSmall'>
					{socials.map(({ name, icons, link }) => (
						<div key={name}>
							<a href={link} target='noreferer'>
								<Icon
									w='24'
									h='24'
									src={icons.default}
									style={{ marginRight: '16px' }}
								/>
								<Text style={{ textTransform: 'capitalize' }}>
									{name}
								</Text>
							</a>
						</div>
					))}
				</div>
				<Space h='32' />
			</div>
			<div className='spaceChildrenSmall'>
				<div>
					<Link to='/resources' className={cn.mark}>
						<Text>Resources</Text>
					</Link>
				</div>
				<Space h='16' />
				<div>
					<Link to='/resources/featured'>
						<Text>Featured Resources</Text>
					</Link>
				</div>
				<div>
					<Link to='/pt/'>
						<Text>Project Teams</Text>
					</Link>
				</div>
				<div>
					<Link to='/mentorship'>
						<Text>Mentorship</Text>
					</Link>
				</div>
				<div>
					<Link to='/merch/'>
						<Text>Merch</Text>
					</Link>
				</div>
				<div>
					<Link to='/designathons/'>
						<Text>Design-a-thon</Text>
					</Link>
				</div>
				<div>
					<a
						target='noreferer'
						href='https://medium.com/@designatuci'
					>
						<Text>Board Blogs</Text>
					</a>
				</div>
				<div>
					<a
						target='noreferer'
						href='https://us16.campaign-archive.com/home/?u=96e1277e37e6f4c2940cd1dc9&id=3cdf6c3ea8'
					>
						<Text>Newsletter Archive</Text>
					</a>
				</div>
				<Space h='16' />
			</div>
			<div className='spaceChildrenSmall'>
				<div>
					<Link to='/join' className={cn.mark}>
						<Text>Join</Text>
					</Link>
				</div>
				<Space h='16' />
				<div>
					<Link to='/contact'>
						<Text>Contact</Text>
					</Link>
				</div>
				<div>
					<Link to='/events'>
						<Text>Events</Text>
					</Link>
				</div>
				<div>
					<Link to='/about'>
						<Text>About</Text>
					</Link>
				</div>
			</div>
		</div>
		<div className='color gray'>
			<Space h='32' />
			<div>
				<Icon w='18' h='18' src='copyright-gray.svg' />
				<Space w='8' />{' '}
				<Text>Copyright {new Date().getFullYear()} Design at UCI</Text>
			</div>
			<Space h='16' />
			<div>
				<Text>
					Developed by{' '}
					<a
						className={cn.mark}
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.kailerg.com/'
					>
						Kailer Garcia
					</a>{', '}
					<a
						className={cn.mark}
						target='_blank'
						rel='noopener noreferrer'
						href='https://ryqn.dev/'
					>
						Ryan Yang
					</a>, and Taesung Hwang	
				</Text>
			</div>
			<Space block h='64' />
		</div>
	</Section>
);

export default memo(Footer);
