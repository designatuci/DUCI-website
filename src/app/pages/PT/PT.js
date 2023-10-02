import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';

import { Text } from 'app/components';
import { Section, Space, Icon } from 'app/Symbols.js';

export const PROJECT_TEAMS_GOOGLE_FORM = 'https://forms.gle/YoNb5Goj6gw6YGQg6';

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
					Project Team applications for Fall 2023 are open.
				</Text>

				<Text className='color gray'>
					To participate, complete the{' '}
					<Text className='color blue'>
						<a
							href={PROJECT_TEAMS_GOOGLE_FORM}
							target='_blank'
							rel='noopener noreferrer'
						>
							project teams registration form
						</a>
					</Text>{' '}
					by Sunday, October 8th, 2023 at 11:59 PM PDT.
				</Text>

				<br />
				<Text size='L'>What are Project Teams?</Text>
				<Text className='color gray'>
					Project Teams is a quarterly program that provides students with design
					experience in a collaborative setting. Each quarter, students form teams
					and work on a design project of their choice (e.g. UI/UX design,
					marketing design, graphic design) from start to finish. Participants
					learn essential design skills along the way, become familiar with
					industry-standard tools, and have a completed project for their portfolio
					at the end of it! No prior experience is necessary, but Project Teams
					will be on a first-come, first-served basis due to limited capacity.
				</Text>
				<Text className='color gray'>
					For Fall 2023, Project Teams will meet Thursdays at 4&ndash;6 PM from
					weeks 2 through 9.
				</Text>
				{/*
				<Text className='color gray'>
					To get involved, <Link to='/join/'>join us</Link> to get
					notifications about when the next applications come out!
				</Text>
				*/}

				<Space h='32' />
				{/* <Text size='L'>Fall 2022 PT schedule</Text>
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
				</Text> */}
			</div>
		</Section>
	</>
);

export default PT;
