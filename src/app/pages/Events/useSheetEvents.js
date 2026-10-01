import { useCallback, useEffect, useState } from "react";

import {
	EVENTS_SHEET_API_URL,
	OPENSHEET_URL,
	RECENT_EVENTS_LIMIT,
	UPCOMING_EVENTS_LIMIT,
} from "./sheetConfig";
import { mapSheetRowToEvent, resolveEventImage, sortEventsNewestFirst } from "./mapSheetRow";

const fetchJson = async (url) => {
	const res = await fetch(url, { cache: "no-store" });
	if (!res.ok) {
		throw new Error(`Sheet fetch failed (${res.status})`);
	}
	return res.json();
};

const eventEndTime = (event) => {
	const start = new Date(event.time).getTime();
	const durationMs = (Number(event.duration) || 60) * 60000;
	return start + durationMs;
};

/**
 * Live events from the Google Sheet master (Apps Script doGet or OpenSheet).
 * Splits into upcoming vs recent (past) for Events tab v3.
 * Past events prefer Event Photo over the IG flyer when present.
 */
export const useSheetEvents = ({
	recentLimit = RECENT_EVENTS_LIMIT,
	upcomingLimit = UPCOMING_EVENTS_LIMIT,
} = {}) => {
	const [upcoming, setUpcoming] = useState([]);
	const [recent, setRecent] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const load = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const primary = EVENTS_SHEET_API_URL.trim();
			let raw;
			try {
				raw = await fetchJson(primary || OPENSHEET_URL);
			} catch (firstErr) {
				if (primary) {
					raw = await fetchJson(OPENSHEET_URL);
				} else {
					throw firstErr;
				}
			}

			const list = Array.isArray(raw) ? raw : [];
			const mapped = list.map(mapSheetRowToEvent).filter(Boolean);
			const now = Date.now();

			const upcomingAll = mapped
				.filter((e) => eventEndTime(e) > now)
				.sort((a, b) => new Date(a.time) - new Date(b.time))
				.map((e) => ({
					...e,
					image: resolveEventImage(e, { past: false }),
				}));

			const recentAll = sortEventsNewestFirst(
				mapped
					.filter((e) => eventEndTime(e) <= now)
					.map((e) => ({
						...e,
						image: resolveEventImage(e, { past: true }),
					}))
					.filter((e) => e.image),
			);

			setUpcoming(
				upcomingLimit > 0
					? upcomingAll.slice(0, upcomingLimit)
					: upcomingAll,
			);
			setRecent(
				recentLimit > 0 ? recentAll.slice(0, recentLimit) : recentAll,
			);
		} catch (err) {
			console.error(err);
			setError(err);
			setUpcoming([]);
			setRecent([]);
		} finally {
			setLoading(false);
		}
	}, [recentLimit, upcomingLimit]);

	useEffect(() => {
		load();
	}, [load]);

	return { upcoming, recent, loading, error, reload: load };
};
