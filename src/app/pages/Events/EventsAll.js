import { Helmet } from 'react-helmet';
import { Section, LoadingD } from '../../Symbols.js';
import { Text } from '../../components';
import { EventCard } from './components';
import EVENT_DATA from '../../../assets/data/events/all.json';

const EventsAll = () => {
	return (
		<>
			<Helmet>
				<title>Event Archive – Design at UCI</title>
			</Helmet>
			<Section className='center short'>
				<Text size='XL'>All Events</Text>
			</Section>
			<Section className='center short fill gray'>
				{EVENT_DATA == null ? (
					// Loading animation
					<LoadingD width='128' style={{ marginBottom: '256px' }} />
				) : (
					// Large next event card
					<div
						className='splitEventCard maxWidth'
						style={{ textAlign: 'left' }}
					>
						{EVENT_DATA.map(event => (
							<EventCard
								key={event.time + event.title}
								{...event}
							/>
						))}
					</div>
				)}
			</Section>
		</>
	);
};

export default EventsAll;
