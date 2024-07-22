export const parseEvents = (events) => {
	let eventData = {
		upcoming: [],
		past: [],
	};

	const now = new Date();

	for (let event of events) {
		const eventTime = new Date(
			new Date(event.time).getTime() + event.duration * 60000,
		);

		if (now < eventTime) {
			eventData.upcoming.unshift(event);
		} else {
			eventData.past.push(event);
		}
	}

	return eventData;
};

export const joinEvents = (a, b) => {
	// handle uninitialized/unparsed event lists
	a = a.upcoming && a.past ? a : { upcoming: [], past: [] };
	b = b.upcoming && b.past ? b : { upcoming: [], past: [] };

	const combinedUpcoming = [...a.upcoming, ...b.upcoming];
	const combinedPast = [...a.past, ...b.past];

	let nextEvent = null;

	if (combinedUpcoming.length > 0) {
		combinedUpcoming.sort(
			(e1, e2) => new Date(e1.time) - new Date(e2.time),
		);
		nextEvent = combinedUpcoming.at(0) ?? null;
	}

	return {
		upcoming: combinedUpcoming,
		past: combinedPast,
		next: nextEvent,
	};
};
