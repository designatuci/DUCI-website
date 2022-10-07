import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Text } from 'app/components';
import { Section, Space, Icon } from 'app/Symbols.js';

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
				<Text className='color red'>
					Project Team applications for Fall 2022 have closed.
				</Text>

				<br />
				<Text size='L'>What are Project Teams?</Text>
				<Text className='color gray'>
					A multi-week program where you work on a team to design or
					re-design a prototype product. Open for all experience
					levels! Teams present at the end and get the chance to
					receive prizes. This is an opportunity that will give you
					more work to display in your portoflio and learn more about
					the UX/UI design process with help.
				</Text>
				<Text className='color gray'>
					Project Teams usually begins in the first weeks of the
					academic quarter.
				</Text>
				<Text className='color gray'>
					To get involved, <Link to='/join/'>join us</Link> to get
					notifications about when the next applications come out!
				</Text>

				<Space h='32' />
				<Text size='L'>Fall 2022 PT schedule</Text>
				<Text className='color gray'>
					Week 2 / Oct 6 @ 8 pm - Meet your Team + Plan your Project
					<br />
					Week 3 / Oct 13 @ 8 pm
					<br />
					Week 4 / Oct 20 @ 8 pm
					<br />
					Week 5 / Oct 27 @ 8 pm
					<br />
					Week 6 / Nov 3 @ 8 pm
					<br />
					Week 7 / Nov 10 @ 8 pm
					<br />
					Week 8 / Nov 17 @ 8 pm
					<br />
					Week 9 / Gen Meeting - Demo Day
				</Text>
			</div>
		</Section>
	</>
);

export default PT;
