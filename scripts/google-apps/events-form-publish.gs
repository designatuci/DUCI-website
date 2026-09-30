/**
 * DAUCI — Events Form → Sheet (master) publisher
 *
 * SETUP
 * 1. Open the "weekly events" Google Sheet → Extensions → Apps Script.
 * 2. Paste this entire file (replace any default code).
 * 3. Save. Run authorizeOnce once and approve Drive + Spreadsheet scopes.
 * 4. Triggers (clock icon) → Add trigger:
 *      Function: onFormSubmit
 *      Event: From spreadsheet → On form submit
 * 5. Deploy → New deployment → Type: Web app
 *      Execute as: Me
 *      Who has access: Anyone
 * 6. Copy the Web app URL into:
 *      src/app/pages/Events/TestEvents/sheetConfig.js → EVENTS_SHEET_API_URL
 * 7. Redeploy the website once. Later Form submissions need no GitHub push.
 *
 * Sheet tab: Form_Responses
 * Columns: Timestamp | Email | Event Title | Event Type | Week | Date |
 *          Start Time | End Time | Image (IG flyer) | Learn more |
 *          notes | Event Photo (overrides flyer once past)
 *
 * FUTURE (not implemented here): sync rows into Sanity Studio.
 */

var SHEET_NAME = "Form_Responses";

/**
 * Optional: Drive folder ID for Form uploads (from the folder URL).
 * When set, onFormSubmit moves Image / Event Photo files into this folder
 * so they don’t pile up in My Drive root. Leave "" to skip.
 */
var UPLOAD_FOLDER_ID = "";

function authorizeOnce() {
	SpreadsheetApp.getActiveSpreadsheet();
	DriveApp.getRootFolder();
}

/**
 * One-shot: publicize Image URLs already in the Sheet (existing rows).
 * Run from the Apps Script editor after authorizeOnce.
 */
function publishExistingImages() {
	var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
	if (!sheet) {
		throw new Error('Missing sheet tab "' + SHEET_NAME + '"');
	}

	var lastRow = sheet.getLastRow();
	if (lastRow < 2) {
		return;
	}

	for (var row = 2; row <= lastRow; row++) {
		publishImageOnRow_(sheet, row);
	}
}

/**
 * Form submit: make uploaded Drive file public and write a hotlink into Image.
 */
function onFormSubmit(e) {
	var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
	if (!sheet) {
		throw new Error('Missing sheet tab "' + SHEET_NAME + '"');
	}

	var row = e && e.range ? e.range.getRow() : sheet.getLastRow();
	publishImageOnRow_(sheet, row);
}

function publishImageOnRow_(sheet, row) {
	var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
	var cols = [];
	for (var hi = 0; hi < headers.length; hi++) {
		var h = String(headers[hi]).toLowerCase().trim();
		if (
			h === "image" ||
			h === "image_url" ||
			h === "ig post image" ||
			h === "ig photo" ||
			h === "event photo" ||
			h === "event_photo"
		) {
			cols.push(hi + 1);
		}
	}
	if (cols.length < 1) {
		throw new Error('Missing column "Image" / "Event Photo"');
	}

	for (var ci = 0; ci < cols.length; ci++) {
		publishOneImageCell_(sheet, row, cols[ci]);
	}
}

function publishOneImageCell_(sheet, row, imageCol) {
	var raw = String(sheet.getRange(row, imageCol).getValue() || "").trim();
	if (!raw) {
		return;
	}

	var fileId = extractDriveFileId_(raw);
	if (!fileId) {
		return;
	}

	try {
		var file = DriveApp.getFileById(fileId);
		file.setSharing(
			DriveApp.Access.ANYONE_WITH_LINK,
			DriveApp.Permission.VIEW,
		);
		// Optional: set UPLOAD_FOLDER_ID below to keep Form uploads out of Drive root
		if (UPLOAD_FOLDER_ID) {
			moveFileToFolder_(file, UPLOAD_FOLDER_ID);
		}
	} catch (err) {
		console.error("Drive share failed for row " + row, err);
		return;
	}

	var publicUrl = "https://lh3.googleusercontent.com/d/" + fileId + "=w1200";
	sheet.getRange(row, imageCol).setValue(publicUrl);
}

function moveFileToFolder_(file, folderId) {
	var dest = DriveApp.getFolderById(folderId);
	dest.addFile(file);
	var parents = file.getParents();
	while (parents.hasNext()) {
		var parent = parents.next();
		if (parent.getId() !== folderId) {
			parent.removeFile(file);
		}
	}
}

/**
 * Web app JSON API — Sheet is the master copy for /test-events.
 * GET → [{ title, time, duration, type, desc, place, image, links }, ...]
 */
function doGet() {
	var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
	if (!sheet || sheet.getLastRow() < 2) {
		return jsonOutput_([]);
	}

	var values = sheet.getDataRange().getValues();
	var headers = values[0].map(function (h) {
		return String(h).trim();
	});
	var events = [];

	for (var i = 1; i < values.length; i++) {
		var row = {};
		for (var c = 0; c < headers.length; c++) {
			row[headers[c]] = values[i][c];
		}
		var mapped = mapSheetRowToEvent_(row);
		if (mapped) {
			events.push(mapped);
		}
	}

	events.sort(function (a, b) {
		return new Date(b.time) - new Date(a.time);
	});

	return jsonOutput_(events);
}

function jsonOutput_(data) {
	return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
		ContentService.MimeType.JSON,
	);
}

function pick_(row, keys) {
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		if (row[key] != null && String(row[key]).trim() !== "") {
			return row[key];
		}
	}
	var names = Object.keys(row);
	for (var k = 0; k < keys.length; k++) {
		var want = String(keys[k]).toLowerCase();
		for (var n = 0; n < names.length; n++) {
			var have = String(names[n]).toLowerCase();
			if (
				have === want ||
				have.indexOf(want) === 0 ||
				want.indexOf(have) === 0
			) {
				if (row[names[n]] != null && String(row[names[n]]).trim() !== "") {
					return row[names[n]];
				}
			}
		}
	}
	return "";
}

function mapSheetRowToEvent_(row) {
	var title = String(
		pick_(row, ["title", "Event Title", "Event title"]),
	).trim();
	if (!title) {
		return null;
	}

	var dateVal = pick_(row, ["date", "Date"]);
	var startVal = pick_(row, ["start_time", "Start Time", "Start time"]);
	var endVal = pick_(row, ["end_time", "End Time", "End time"]);
	var time = combineDateAndTime_(dateVal, startVal);
	if (!time) {
		return null;
	}

	var duration = durationMinutes_(startVal, endVal);
	var image = normalizeImageUrl_(
		pick_(row, [
			"image_url",
			"IG Post Image",
			"IG post image",
			"Ig Post Image",
			"Image",
			"image",
			"IG photo",
			"Ig photo",
		]),
	);
	var eventPhoto = normalizeImageUrl_(
		pick_(row, ["Event Photo", "event_photo", "Event photo", "event photo"]),
	);
	var learnMore = String(
		pick_(row, [
			"learn_more_url",
			"Learn more link (ex: ig link)",
			"Learn more link",
			"Learn More",
		]),
	).trim();
	var type = String(
		pick_(row, ["event_type", "Event Type", "type", "Type"]) || "Event",
	).trim();
	var week = formatWeekLabel_(
		pick_(row, ["week", "Week", "week_number", "Week Number"]),
	);

	var event = {
		title: title,
		time: time,
		duration: String(duration),
		type: type || "Event",
		week: week,
		desc: "",
		place: "TBD",
		image: image || "",
		eventPhoto: eventPhoto || "",
	};

	if (learnMore) {
		event.links = [{ label: "Instagram", link: learnMore }];
	}

	return event;
}

function formatWeekLabel_(val) {
	if (val == null || String(val).trim() === "") {
		return "";
	}
	var s = String(val).trim();
	if (/^week\s+/i.test(s)) {
		return s.replace(/^week\s+/i, "Week ");
	}
	if (/^\d+$/.test(s)) {
		return "Week " + s;
	}
	return s;
}

function combineDateAndTime_(dateVal, timeVal) {
	var datePart = formatDatePart_(dateVal);
	var timePart = formatTimePart_(timeVal);
	if (!datePart) {
		return null;
	}
	return datePart + "T" + (timePart || "18:00");
}

function formatDatePart_(val) {
	if (val instanceof Date && !isNaN(val.getTime())) {
		return (
			val.getFullYear() +
			"-" +
			pad2_(val.getMonth() + 1) +
			"-" +
			pad2_(val.getDate())
		);
	}
	var s = String(val || "").trim();
	if (!s) {
		return null;
	}
	// already YYYY-MM-DD
	var m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
	if (m) {
		return m[1] + "-" + m[2] + "-" + m[3];
	}
	// M/D/YYYY
	var m2 = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
	if (m2) {
		return m2[3] + "-" + pad2_(m2[1]) + "-" + pad2_(m2[2]);
	}
	var parsed = new Date(s);
	if (!isNaN(parsed.getTime())) {
		return formatDatePart_(parsed);
	}
	return null;
}

function formatTimePart_(val) {
	if (val instanceof Date && !isNaN(val.getTime())) {
		return pad2_(val.getHours()) + ":" + pad2_(val.getMinutes());
	}
	var s = String(val || "").trim();
	if (!s) {
		return null;
	}
	var m12 = s.match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)/i);
	if (m12) {
		var h = parseInt(m12[1], 10);
		var min = m12[2];
		var ap = m12[3].toUpperCase();
		if (ap === "PM" && h < 12) h += 12;
		if (ap === "AM" && h === 12) h = 0;
		return pad2_(h) + ":" + min;
	}
	var m24 = s.match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);
	if (m24) {
		return pad2_(m24[1]) + ":" + pad2_(m24[2]);
	}
	return null;
}

function durationMinutes_(startVal, endVal) {
	var start = timeToMinutes_(startVal);
	var end = timeToMinutes_(endVal);
	if (start == null || end == null) {
		return 60;
	}
	var diff = end - start;
	if (diff <= 0) {
		diff += 24 * 60;
	}
	return diff;
}

function timeToMinutes_(val) {
	var part = formatTimePart_(val);
	if (!part) {
		return null;
	}
	var bits = part.split(":");
	return parseInt(bits[0], 10) * 60 + parseInt(bits[1], 10);
}

function normalizeImageUrl_(val) {
	var raw = String(val || "").trim();
	if (!raw) {
		return "";
	}
	var id = extractDriveFileId_(raw);
	if (id) {
		return "https://lh3.googleusercontent.com/d/" + id + "=w1200";
	}
	return raw;
}

function extractDriveFileId_(url) {
	var s = String(url || "");
	var patterns = [
		/[?&]id=([a-zA-Z0-9_-]+)/,
		/\/file\/d\/([a-zA-Z0-9_-]+)/,
		/\/open\?id=([a-zA-Z0-9_-]+)/,
		/\/uc\?.*?id=([a-zA-Z0-9_-]+)/,
		/drive\.google\.com\/([a-zA-Z0-9_-]{25,})/,
	];
	for (var i = 0; i < patterns.length; i++) {
		var m = s.match(patterns[i]);
		if (m && m[1]) {
			return m[1];
		}
	}
	// bare file id
	if (/^[a-zA-Z0-9_-]{25,}$/.test(s)) {
		return s;
	}
	return null;
}

function pad2_(n) {
	n = parseInt(n, 10);
	return (n < 10 ? "0" : "") + n;
}
