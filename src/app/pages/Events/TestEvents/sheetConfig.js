/**
 * Google Sheet is the master copy for /events.
 *
 * Spreadsheet: https://docs.google.com/spreadsheets/d/1jKOrO1Am--fnccCObI16Ih0eZWNfhdxrNgzdIBjNN0U
 * Tab: Form_Responses
 *
 * Expected columns: Week, Event Type, Image (IG flyer), Event Photo (past override).
 *
 * After deploying scripts/google-apps/events-form-publish.gs as a Web app,
 * paste the deployment URL below. Until then, the page falls back to OpenSheet
 * (public CSV→JSON) so a viewable Sheet still works for reads.
 *
 * Future goal: sync Sheet → Sanity Studio (not implemented yet).
 */

export const SPREADSHEET_ID = "1jKOrO1Am--fnccCObI16Ih0eZWNfhdxrNgzdIBjNN0U";
export const SHEET_TAB = "Form_Responses";

/** Apps Script Web app URL (doGet). Leave empty to use OpenSheet fallback. */
export const EVENTS_SHEET_API_URL = "";

/** Public JSON mirror when EVENTS_SHEET_API_URL is unset (Sheet must be link-viewable). */
export const OPENSHEET_URL = `https://opensheet.elk.sh/${SPREADSHEET_ID}/1`;

/** 0 = no cap (show all matching events). */
export const RECENT_EVENTS_LIMIT = 0;
export const UPCOMING_EVENTS_LIMIT = 3;
