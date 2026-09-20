# Designathon 25 Assets

Structure mirrors Designathon 24: **data** (JSON) and **graphics** (images by section).

## data/
- `judges.json` – Keynote + judges for Designathon 2025
- `workshop-hosts.json` – Workshop hosts / panelists

## graphics/
Image assets for Designathon 25, copied from [designathon-website](https://github.com/designatuci/designathon-website) → `public/images/seasons/2025/landing/`.

| Folder     | Contents |
|-----------|----------|
| about/    | about-background.gif |
| hero/     | header.gif, curve text.png, video/ (60 frames) |
| judges/   | Judge/speaker photos (14 files) |
| rules/    | rules.jpg |
| sponsors/ | logos/, train-tracks, cart/front-back, clouds |
| team/     | directors/, imported/ (team photos) |
| footer/   | 26 .webp frames |
| (root)    | designathon-logo.png, star.svg |

Use these via relative imports from components (e.g. `../../assets/graphics/judges/robyn-young.png`) or ensure the build serves them; `public/designathon25/2025/landing/` also has a copy for URL-based use.
