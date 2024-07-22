import { Helmet } from "react-helmet";

import { Text } from "app/components";
import { Section, LoadingD } from "app/Symbols.js";

import { EventCard } from "./components";
import { useEvents } from "./useEvents";

const EventsAll = () => {
	const events = useEvents();

	return (
		<>
			<Helmet>
				<title>Event Archive – Design at UCI</title>
			</Helmet>
			<Section className="center short">
				<Text size="XL">All Events</Text>
			</Section>
			<Section className="center short fill gray">
				{!events?.past ? (
					// Loading animation
					<LoadingD width="128" style={{ marginBottom: "256px" }} />
				) : (
					// Large next event card
					<div
						className="splitEventCard maxWidth"
						style={{ textAlign: "left" }}
					>
						{events?.past.map((event) => (
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
