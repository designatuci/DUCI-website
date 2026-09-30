import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Text } from "app/components";
import { Section } from "app/Symbols.js";

import cn from "./EventsSchedule.module.scss";

const SCHEDULE_PANELS = [
	{
		src: "/static/events/fall-2026/week-0-1.jpg",
		alt: "Fall 2026 schedule — Weeks 0–1",
	},
	{
		src: "/static/events/fall-2026/week-2-5.jpg",
		alt: "Fall 2026 schedule — Weeks 2–5",
	},
	{
		src: "/static/events/fall-2026/week-6-10.jpg",
		alt: "Fall 2026 schedule — Weeks 6–10",
	},
];

const EventsSchedule = () => (
	<>
		<Helmet>
			<title>Fall 2026 Schedule – Design at UCI</title>
		</Helmet>
		<Section className={`center short ${cn.panels}`}>
			{SCHEDULE_PANELS.map((panel) => (
				<img
					key={panel.src}
					src={panel.src}
					alt={panel.alt}
					className={cn.panel}
				/>
			))}
		</Section>
		<Section className="center short">
			<Link to="/events" className="button color blue">
				<Text>Back to events</Text>
			</Link>
		</Section>
	</>
);

export default EventsSchedule;
