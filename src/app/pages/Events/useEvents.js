import { useState, useEffect, useCallback } from "react";
import { parseEvents, joinEvents } from "./utils.js";
import EVENT_DATA from "assets/data/events/all.json";
import { client } from "sanity-client.js";

const legacyEvents = parseEvents(EVENT_DATA); // events from manual JSON file

export const useEvents = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchEvents = useCallback(async () => {
		setLoading(true);
		const result = await client.fetch(
			`*[_type == "event"] | order(time desc)`,
			{},
		);

		setLoading(false);
		return result.map((item) => ({
			title: item.title,
			time: item.time,
			duration: item.duration,
			type: item.type,
			desc: item.desc,
			place: item.place,
			links: item.links
				? item.links.map((linkItem) => ({
						label: linkItem.label,
						link: linkItem.link,
					}))
				: [],
		}));
	}, []);

	useEffect(() => {
		const getEvents = async () => {
			try {
				const data = await fetchEvents();
				const eventData = parseEvents(data);
				const joinedEvents = joinEvents(eventData, legacyEvents);
				setEvents(joinedEvents);
			} catch (e) {
				console.error(e);
			}
		};
		getEvents();
	}, [fetchEvents]);

	return { events, loading };
};
