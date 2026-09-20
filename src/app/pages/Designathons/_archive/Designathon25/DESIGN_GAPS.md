# Designathon 25 – Gaps vs Reference (designathon-website)

Compared to the attached reference screens, these are missing or different.

## ✅ Already aligned
- **Navigation**: Links (About, Itinerary, FAQ, Prizes, Partners, Team, Rules), Devpost link, logo, mobile menu.
- **Hero**: Scroll-driven canvas, countdown, date/location, header graphic (rollercoaster/title are in the hero assets).
- **Partners**: Train tracks + carts marquee, sponsor logos, clouds, hover labels.
- **Noise texture**: `d25-noise` on blue sections.
- **Prizes**: 1st (pink + DOT icon), 2nd (light blue), 3rd (peach), Honorable (yellow), Most Novel (light blue).

## 🔧 Implemented in this pass
- **Nav**: Devpost button uses pink→orange gradient; bar gets frosted glass on scroll.
- **Itinerary**: “All times are in PST.”, gradient bar for time-marks (e.g. “8:00 AM | Check-In Starts”), event cards as two columns (left: title/location/time, right: description).
- **FAQ**: White, bold triggers; underline when open; + icon (already present).
- **Past Events**: Copy set to “More info about past events can be found on the Design at UCI website.” with link.
- **Team**: Title “Meet the Team” and subtitle “Introducing the 2025 Design-a-thon Team!”.

## ❌ Still missing (would need design/data/assets)

1. **Hero**
   - Rollercoaster track + cart with characters and scroll motion come from the **hero assets** (header.gif / video frames). If the current hero looks different, the source is the asset set, not the code.

2. **Section titles (“bubbly” font)**
   - Reference uses a custom title font (e.g. Radey). We use system/stack. Matching exactly would require loading that font and applying it to section headings (Itinerary, FAQ, Prizes, Partners, Meet the Team, Past Events).

3. **Team**
   - Full block: tabs (Directors, Design, Operations, Corporate, Finance, Marketing) and grid of members (photo, name, role, LinkedIn). Currently we only have a CTA to the main site. Full match would require team data and layout from the reference.

4. **Past Events**
   - Horizontal **carousel** of past event cards (e.g. “True 2 You”) with custom card art. We have title + body + link only. Carousel + card designs would require event data and assets from the reference.

5. **Itinerary – Sunday content**
   - Ref has detailed Sunday items (e.g. “Check-In and Breakfast” at ISEB Patio, “Final Submissions Due on Devpost” with descriptions). Our content is close; any copy or time differences can be synced from `designathon-website-ref` itinerary-dates.

6. **Countdown**
   - Ref: capsule shape, dark blue numbers, grey “days”/“hrs”/“mins”/“secs” labels. Our countdown can be restyled to match (rounded pill, typography, spacing).

7. **Date/location icons**
   - Ref uses calendar and map-pin icons next to “April 18 - 20, 2025” and “UC Irvine DCE”. We can add inline SVGs or an icon font.
