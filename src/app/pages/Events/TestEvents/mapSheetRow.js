const pad2 = (n) => String(n).padStart(2, "0");

/** First non-empty value among possible Sheet header names. */
const pick = (row, ...keys) => {
	if (!row) return "";
	for (const key of keys) {
		if (row[key] != null && String(row[key]).trim() !== "") {
			return row[key];
		}
	}
	// Case-insensitive / partial match (Form headers can vary slightly)
	const entries = Object.entries(row);
	for (const key of keys) {
		const want = key.toLowerCase();
		const found = entries.find(([k]) => {
			const have = String(k).toLowerCase();
			return have === want || have.startsWith(want);
		});
		if (found && found[1] != null && String(found[1]).trim() !== "") {
			return found[1];
		}
	}
	return "";
};

const formatDatePart = (val) => {
	if (val == null || val === "") return null;

	if (val instanceof Date && !Number.isNaN(val.getTime())) {
		return `${val.getFullYear()}-${pad2(val.getMonth() + 1)}-${pad2(
			val.getDate(),
		)}`;
	}

	const s = String(val).trim();
	const iso = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
	if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;

	const mdy = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
	if (mdy) return `${mdy[3]}-${pad2(mdy[1])}-${pad2(mdy[2])}`;

	const parsed = new Date(s);
	if (!Number.isNaN(parsed.getTime())) return formatDatePart(parsed);

	return null;
};

const formatTimePart = (val) => {
	if (val == null || val === "") return null;

	if (val instanceof Date && !Number.isNaN(val.getTime())) {
		return `${pad2(val.getHours())}:${pad2(val.getMinutes())}`;
	}

	const s = String(val).trim();
	const m12 = s.match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)/i);
	if (m12) {
		let h = parseInt(m12[1], 10);
		const min = m12[2];
		const ap = m12[3].toUpperCase();
		if (ap === "PM" && h < 12) h += 12;
		if (ap === "AM" && h === 12) h = 0;
		return `${pad2(h)}:${min}`;
	}

	const m24 = s.match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);
	if (m24) {
		return `${pad2(m24[1])}:${pad2(m24[2])}`;
	}

	return null;
};

const timeToMinutes = (val) => {
	const part = formatTimePart(val);
	if (!part) return null;
	const [h, m] = part.split(":").map((x) => parseInt(x, 10));
	return h * 60 + m;
};

const durationMinutes = (startVal, endVal) => {
	const start = timeToMinutes(startVal);
	const end = timeToMinutes(endVal);
	if (start == null || end == null) return 60;
	let diff = end - start;
	if (diff <= 0) diff += 24 * 60;
	return diff;
};

const extractDriveFileId = (url) => {
	const s = String(url || "");
	const patterns = [
		/[?&]id=([a-zA-Z0-9_-]+)/,
		/\/file\/d\/([a-zA-Z0-9_-]+)/,
		/\/open\?id=([a-zA-Z0-9_-]+)/,
		/\/uc\?.*?id=([a-zA-Z0-9_-]+)/,
	];
	for (const re of patterns) {
		const m = s.match(re);
		if (m?.[1]) return m[1];
	}
	if (/^[a-zA-Z0-9_-]{25,}$/.test(s)) return s;
	return null;
};

const normalizeImageUrl = (val) => {
	const raw = String(val || "").trim();
	if (!raw) return "";
	const id = extractDriveFileId(raw);
	// lh3 works in <img>; drive.google.com/uc?export=view often fails in browsers
	if (id) return `https://lh3.googleusercontent.com/d/${id}=w1200`;
	return raw;
};

/** Normalize Sheet Week values like "1", "Week 1", 1 → "Week 1". */
export const formatWeekLabel = (val) => {
	if (val == null || String(val).trim() === "") return "";
	const s = String(val).trim();
	if (/^week\s+/i.test(s)) return s.replace(/^week\s+/i, "Week ");
	if (/^\d+$/.test(s)) return `Week ${s}`;
	return s;
};

/**
 * Map a Form_Responses row (object keyed by header) to the site event shape.
 * Returns null if required fields are missing.
 *
 * Image = IG flyer (upcoming). Event Photo = post-event photo (overrides flyer once past).
 */
export const mapSheetRowToEvent = (row) => {
	if (!row || typeof row !== "object") return null;

	// Already normalized (Apps Script doGet)
	if (
		row.time &&
		row.title &&
		row.image !== undefined &&
		(Array.isArray(row.links) || row.links === undefined)
	) {
		return {
			title: row.title,
			time: row.time,
			duration: String(row.duration ?? 60),
			type: row.type || "Event",
			week: formatWeekLabel(row.week),
			desc: row.desc || "",
			place: row.place || "TBD",
			image: row.image || "",
			eventPhoto: row.eventPhoto || row.event_photo || "",
			links: row.links || [],
		};
	}

	const title = String(
		pick(row, "title", "Event Title", "Event title"),
	).trim();
	if (!title) return null;

	const datePart = formatDatePart(pick(row, "date", "Date"));
	if (!datePart) return null;

	const startTime = pick(row, "start_time", "Start Time", "Start time");
	const endTime = pick(row, "end_time", "End Time", "End time");
	const timePart = formatTimePart(startTime) || "18:00";
	const time = `${datePart}T${timePart}`;
	const duration = durationMinutes(startTime, endTime);

	// IG flyer only — do not pick "Event Photo" here
	const image = normalizeImageUrl(
		pick(
			row,
			"image_url",
			"IG Post Image",
			"IG post image",
			"Ig Post Image",
			"Image",
			"image",
			"IG photo",
			"Ig photo",
		),
	);
	const eventPhoto = normalizeImageUrl(
		pick(row, "Event Photo", "event_photo", "Event photo", "event photo"),
	);
	const learnMore = String(
		pick(
			row,
			"learn_more_url",
			"Learn more link (ex: ig link)",
			"Learn more link",
			"Learn More",
		),
	).trim();
	const type = String(
		pick(row, "event_type", "Event Type", "type", "Type") || "Event",
	).trim();
	const week = formatWeekLabel(
		pick(row, "week", "Week", "week_number", "Week Number"),
	);

	const event = {
		title,
		time,
		duration: String(duration),
		type: type || "Event",
		week,
		desc: "",
		place: "TBD",
		image,
		eventPhoto,
	};

	if (learnMore) {
		event.links = [{ label: "Instagram", link: learnMore }];
	}

	return event;
};

/** Flyer for upcoming; Event Photo overrides flyer once the event is past. */
export const resolveEventImage = (event, { past } = {}) => {
	if (!event) return "";
	if (past && event.eventPhoto) return event.eventPhoto;
	return event.image || event.eventPhoto || "";
};

export const sortEventsNewestFirst = (events) =>
	[...events].sort((a, b) => new Date(b.time) - new Date(a.time));
