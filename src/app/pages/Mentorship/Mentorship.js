import { Helmet } from 'react-helmet';

import { Text } from 'app/components';
import { Icon, Section, Space } from 'app/Symbols.js';

import { Link } from 'react-router-dom';

const Merch = () => (
	<>
		<Helmet>
			<title>Mentorship – Design at UCI</title>
		</Helmet>
		<Section className='center page short'>
			<Icon
				className='wait dx scale'
				w='96'
				h='96'
				src='mentor-main.svg'
			/>
			<Text size='XXL' className='wait dx scale'>
				Mentorship
			</Text>
			<Space h='16' />
			<div
				className='flex left slim spaceChildrenSmall'
				style={{ textAlign: 'left' }}
			>
				<Text className='color green'>
					Design at UCI Mentorship Applications are officially open!!
				</Text>
				<Text className='color gray'>
					Application form can be found{' '}
					<Text className='color blue'>
						<a
							href='https://forms.gle/3SQwM6CN3Jz7KjUZ7'
							target='_blank'
							rel='noopener noreferrer'
						>
							here
						</a>
					</Text>
					.
				</Text>

				<br />
				<Text size='L'>What is the Mentorship Program?</Text>
				<Text className='color gray'>
					Our new mentorship program aims to increase design community
					bonds, elevate and support our emerging designers, and allow
					our members to form more personalized connections within the
					club. Mentees are placed into a family with a design mentor,
					matched by their design interests, experience, and
					personality. 
				</Text>
				<Text className='color gray'>
					If you’re interested in joining the mentorship program,
					please fill out{' '}
					<Text className='color blue'>
						<a
							href='https://forms.gle/3SQwM6CN3Jz7KjUZ7'
							target='_blank'
							rel='noopener noreferrer'
						>
							this application form
						</a>{' '}
					</Text>{' '} 
					by Friday 10/28 to join the
					program as a mentor or mentee!
				</Text>
				<Text className='color gray'>
					To get involved, <Link to='/join'>join us</Link> to get
					notifications about when the next applications come out!
				</Text>
			</div>
		</Section>
	</>
);

export default Merch;
