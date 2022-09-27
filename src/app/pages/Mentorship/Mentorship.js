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
			<Icon className='wait dx scale' w='96' h='96' src='merch.svg' />
			<Text size='XXL' className='wait dx scale'>
				Mentorship
			</Text>
			<Space h='16' />
			<div
				className='flex left slim spaceChildrenSmall'
				style={{ textAlign: 'left' }}
			>
				<Text className='color green'>
					Mentorship interest forms for Fall 2022 are open.
				</Text>
				<Text className='color gray'>
					Interest form can be found{' '}
					<Text className='color blue'>
						<a
							href='https://forms.gle/2F8iVoaYKfSjuyBF9'
							target='_blank'
							rel='noopener noreferrer'
						>
							here
						</a>
					</Text>
				</Text>

				<br />
				<Text size='L'>What is the Mentorship Program?</Text>
				<Text className='color gray'>
					We are super excited to announce our first ever Mentorship
					Program. Through this program, we aim to strengthen design
					community bonds and elevate our emerging designers by
					offering personalized mentorship based on design interests,
					experience, and personality.
				</Text>
				<Text className='color gray'>
					If you’re interested in joining the mentorship program,
					please fill out{' '}
					<Text className='color blue'>
						<a
							href='https://forms.gle/2F8iVoaYKfSjuyBF9'
							target='_blank'
							rel='noopener noreferrer'
						>
							this interest form
						</a>{' '}
					</Text>{' '}
					by Sunday 10/2 @ 11:59PM. This form is just to gauge the
					interest in the program and is not binding!!
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
