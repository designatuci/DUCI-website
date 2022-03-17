import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Section, Text, Space, Icon } from '../Symbols.js';

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
			<div className='flex left textAlignLeft slim spaceChildrenSmall'>
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
