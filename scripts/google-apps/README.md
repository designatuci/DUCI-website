# Events Form → Sheet → /test-events

Sheet is the **master copy** for the hidden `/test-events` prototype. New Form rows show on the site without a GitHub deploy.

## Install Apps Script (Approach B images + JSON API)

1. Open the weekly-events Sheet → **Extensions → Apps Script**.
2. Paste [`events-form-publish.gs`](./events-form-publish.gs); save.
3. Run `authorizeOnce` once and approve permissions (Drive + Spreadsheet).
4. Run `publishExistingImages` once so rows already in the Sheet get public image links.
5. **Triggers** → Add trigger → `onFormSubmit` → From spreadsheet → On form submit  
   (new Form uploads become public automatically).
6. **Deploy → New deployment → Web app** (optional, for the JSON API)  
   - Execute as: Me  
   - Who has access: Anyone  
7. Copy the Web app URL into  
   `src/app/pages/Events/TestEvents/sheetConfig.js` → `EVENTS_SHEET_API_URL`  
   then deploy the site once.

Until the Web app URL is set, `/test-events` falls back to [OpenSheet](https://opensheet.elk.sh) (Sheet must be Anyone with the link → Viewer).

**Why images are blank:** Form uploads land as private Drive files. The browser gets `403` until sharing is **Anyone with the link → Viewer**. Apps Script does that; OpenSheet alone cannot.

## Day-to-day

- Add events via the Google Form (photo upload OK).
- **Image** = IG flyer (Upcoming cards).
- **Event Photo** = real photo after the event; once the event is past, this overrides Image on Recent cards.
- Fix typos / remove junk by editing or deleting Sheet rows.
- Visit `/test-events` (not in the nav) to preview.

## Keep Form uploads in one Drive folder

Google Forms always creates its own upload folder (often near Drive home). To corral files:

1. In **Drive**, find the folder named like your Form (or open the Form → Responses → folder icon).
2. **Move** that whole folder into your preferred parent (e.g. `DAUCI Events Photos`).
3. Optional: in Apps Script set `UPLOAD_FOLDER_ID` to that folder’s ID so `onFormSubmit` also moves each file there after upload.

Forms cannot change the upload destination to an arbitrary folder without that move / script step.

## Future

Sync Sheet → Sanity Studio so events can also be edited there. Not implemented yet.
