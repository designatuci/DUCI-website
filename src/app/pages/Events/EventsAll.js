import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { Section, LoadingD } from '../../Symbols.js';
import { Text } from '../../components';
import { EventCard } from './components';

const EventsAll = () => {
	const [eventData, setEventData] = useState(null);
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/designatuci/data/main/events.json'
		)
			.then(res => res.json())
			.then(data => {
				setEventData(data.events);
			});
	}, []);
	return (
		<>
			<Helmet>
				<title>Event Archive – Design at UCI</title>
			</Helmet>
			<Section className='center short'>
				<Text size='XL'>All Events</Text>
			</Section>
			<Section className='center short fill gray'>
				{eventData == null ? (
					// Loading animation
					<LoadingD width='128' style={{ marginBottom: '256px' }} />
				) : (
					// Large next event card
					<div
						className='splitEventCard maxWidth'
						style={{ textAlign: 'left' }}
					>
						{eventData.map(event => (
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
