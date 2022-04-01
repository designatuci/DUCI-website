import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Section, Space, Icon } from '../../Symbols.js';
import { Text } from '../../components';

const PT = () => (
	<>
		<Helmet>
			<title>Project Teams – Design at UCI</title>
		</Helmet>
		<Section className='center page short'>
			<Icon className='wait dx scale' w='96' h='96' src='pt.svg' />
			<Text size='XXL' className='wait dx scale'>
				Project Teams
			</Text>
			<Space h='16' />
			<div
				className='flex left slim spaceChildrenSmall'
				style={{ textAlign: 'left' }}
			>
				<Text className='color green'>
					Project Team apps for Spring 2022 are open now!
				</Text>
				<Text className='color gray'>
					Applications are due {' '}
					<Text className='color red'>
						Monday April 4th at 11:59 PM PST.
					</Text>
				</Text>

				<Text className='color gray'>
					Sign ups can be found {''}
					<a
						href='https://bit.ly/3DpZBz9'
						target='_blank'
						rel='noopener noreferrer'
						className='color blue'
					>
						here.
					</a>
				</Text>
				<br />
				<Text size='L'>What are Project Teams?</Text>
				<Text className='color gray'>
					A multi-week program where you work on a team to design or
					re-design a prototype product. Open for all experience
					levels! Teams present at the end and get the chance to
					recieve prizes. This is an opportunity that will give you
					more work to display in your portoflio and learn more about
					the UX/UI design process with help.
				</Text>
				<Text className='color gray'>
					Project Teams usually begins in the first weeks of the
					academic quarter.
				</Text>
				<Text className='color gray'>
					To get involved,{' '}
					<Link to='/join/' className='link'>
						join us
					</Link>{' '}
					to get notifications about when the next applications come
					out!
				</Text>
			</div>
		</Section>
	</>
);

export default PT;
