# ✝ CEFM Ministries — Official Website

> **Christian Evangelical Fellowship Mission**
> Founded in 1997 · Kanyakumari, Tamil Nadu, India

A premium, responsive, devotional website for CEFM Ministries — a church planting and missionary organization serving across 6 Indian states with 115+ missionaries and 162+ churches.

🌐 **Live Site:** [https://akashkolanchiyapan.github.io/cefm-ministries/](https://akashkolanchiyapan.github.io/cefm-ministries/)

---

## 📋 Table of Contents

- [Features](#-features)
- [Pages](#-pages)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Changelog](#-changelog)

---

## ✨ Features

### Design & UX
- **Sacred & Modern** aesthetic with Midnight Blue, Gold, and Ivory color palette
- Fully **responsive** across mobile, tablet, and desktop
- Smooth **scroll-reveal animations** on all sections
- **Glassmorphism** and gradient accents throughout
- Google Fonts typography (Inter, Playfair Display)

### Core Features
- **Animated stat counters** for missionaries, churches, and states
- **Interactive accordion** for state-wise church listings
- **Live Stream** page with embedded YouTube player
- **Prayer Wall** with prayer request form and auto-cycling prayer times
- **Donation page** with bank details + GPay QR code
- **Songs of Praise** with collapsible Tamil lyrics (6 original compositions)
- **Contact Us** page with embedded Google Maps

### Content
- 115+ missionaries across 6 states
- State → District → Pastor Name + Church Address hierarchy
- 14 ministry areas with descriptions
- Statement of Faith, Vision, and Mission Plan
- Leadership page with founder and state coordinators

---

## 📄 Pages

| # | Page | File | Description |
|---|------|------|-------------|
| 1 | **Home** | `index.html` | Hero banner, mission statement, animated counters, ministry highlights |
| 2 | **Leadership** | `leadership.html` | Founder profile, leadership team, state coordinators |
| 3 | **Ministries** | `ministries.html` | Statement of Faith, 3-fold vision, mission plan, 14 ministry areas |
| 4 | **Churches** | `churches.html` | 115+ pastors listed by State → District with addresses |
| 5 | **Songs** | `songs.html` | 6 Tamil praise songs with expandable lyrics |
| 6 | **Prayer Wall** | `prayer.html` | Prayer request form, prayer time schedule |
| 7 | **Service** | `service.html` | Weekly service schedule, worship timings |
| 8 | **Live Stream** | `live.html` | Embedded YouTube live stream and sermon archive |
| 9 | **Contact Us** | `contact.html` | Contact form, Google Maps embed, HQ address |
| 10 | **Donate** | `donate.html` | Bank details, GPay QR, missionary support info |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (semantic) |
| Styling | Vanilla CSS3 (custom properties, grid, flexbox) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Inter, Playfair Display) |
| Deployment | GitHub Pages via GitHub Actions |
| CI/CD | `.github/workflows/deploy.yml` (auto-deploy on push to `main`) |

---

## 📁 Project Structure

```
CEFM CHURCH/
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages auto-deployment
├── images/                     # Site images (logo, icons)
├── leaders/                    # Leadership photos
├── churches-state and district wise/
│   └── church photos-state and district wise/
│       ├── Andra Pradesh/
│       ├── Chhattisgarh/
│       ├── Odisha/
│       ├── Tamilnadu/
│       └── Telengana/
├── index.html                  # Home page
├── leadership.html             # Leadership page
├── ministries.html             # Ministries page
├── churches.html               # Churches page
├── churches_data.js            # Churches data (State/District/Pastor)
├── songs.html                  # Songs of Praise page
├── prayer.html                 # Prayer Wall page
├── service.html                # Service schedule page
├── live.html                   # Live Stream page
├── contact.html                # Contact Us page
├── donate.html                 # Donation page
├── styles.css                  # Global stylesheet
├── script.js                   # Global JS (nav, animations, scroll reveal)
└── README.md
```

---

## 🚀 Deployment

The site auto-deploys to **GitHub Pages** on every push to `main` using a GitHub Actions workflow.

**Workflow:** `.github/workflows/deploy.yml`
- Triggers on push to `main` or manual dispatch
- Uses `actions/upload-pages-artifact` + `actions/deploy-pages`
- Deploys the entire root directory as a static site

### To deploy manually:
```bash
git add -A
git commit -m "your message"
git push origin main
# GitHub Actions will auto-deploy within ~60 seconds
```

---

## 📝 Changelog

All commits in reverse chronological order:

### 2026-03-03

#### `d98ead7` — Simplify churches, fix Tamil lyrics, separate ministries, remove gallery
- **Deleted** `gallery.html` and `gallery_data.js`
- **Removed** all Gallery nav/footer links from every page (10 files)
- **Simplified `churches.html`** — removed all photos, lightbox, emojis; now shows text-only: State → District → Pastor Name + Church Address
- **Fixed Tamil lyrics in `songs.html`** — converted legacy Bamini-encoded text to proper Unicode Tamil for all 6 songs
- **Separated ministry areas** in `ministries.html` — each of 14 ministries now displayed as individual numbered blocks instead of compact grid cards
- **Fixed state names** — "TELUGANA" → "TELANGANA", "TAMILNADU" → "TAMIL NADU"
- **Updated `styles.css`** — added `.church-list-item` text-only styles

#### `6066bc4` — Add Songs, Gallery, and Churches pages with photos
- Added **Songs of Praise** page with 6 Tamil worship song lyrics in expandable accordion
- Added **Gallery** page with categorized church photos sorted by year
- Rebuilt **Churches** page with photo galleries and lightbox viewer
- Added `churches_data.js` with photo folder mappings for all 6 states

### 2026-03-02

#### `562978a` — Rebuild churches.html with all 115 missionaries from Excel file across 6 states
- Extracted missionary data from `MISSIONARY DETAILS ALL FINAL.xlsx` (6 sheets)
- Built dynamic accordion with State → District → Pastor cards
- Data covers: Andhra Pradesh, Telangana, Chhattisgarh, Maharashtra, Odisha, Tamil Nadu

#### `8d98d41` — Uppercase logo name on all pages, uppercase nav/footer links via CSS
- Standardized branding: "CHRISTIAN EVANGELICAL FELLOWSHIP MISSION" in uppercase
- Added CSS `text-transform: uppercase` for nav and footer links

#### `b8ca9c5` — Add Contact Us as separate page
- Created `contact.html` with Google Maps embed and contact form
- Removed contact section from Service page
- Updated all nav links across every page

#### `7bfea34` — Rename Schedule to Service, add Contact Us section
- Renamed "Schedule" page to "Service" (`service.html`)
- Added Contact Us section
- Updated all navigation links

#### `af6c72b` — Major update: rebuild ministries & donate pages
- Deleted Zonal Leadership section
- Rebuilt Ministries page with Statement of Faith, 3-fold Vision, Mission Plan, and 14 ministry areas
- Rebuilt Donate page with bank details and GPay QR code
- Fixed prayer wall timing

#### `9719c74` — Fix logo display
- Show only full organization name near logo
- Removed duplicate tagline

#### `be9bb6e` — Add State Coordinators to leadership page
- Added State Coordinators section to leadership page

#### `ca12fa2` — Replace CEFM with full form, fix YouTube
- Updated navbar/footer to show full "Christian Evangelical Fellowship Mission"
- Fixed YouTube embed links

#### `6dfa00c` — Fix navbar branding and YouTube embeds
- Replaced "CEFM Ministries" with "CEFM" in navbar/footer
- Fixed YouTube video IDs

#### `b38392d` — Fix YouTube iframe embeds
- Updated all YouTube iframe embeds to correct links

#### `0146e7b` — Update YouTube links, page titles, churches data
- Updated YouTube links and page titles to full organization name
- Added Pr. Vimalraj to churches data

#### `3e668a9` — New logo, leadership photos, stat counters, Churches page
- Added new CEFM logo
- Added leadership photos
- Implemented animated stat counters
- Created Churches page with state/district-wise pastor listings

### 2026-03-01

#### `48256c5` — Enable GitHub Pages in workflow
- Fixed GitHub Pages auto-enablement in deploy workflow

#### `7a61604` — Add GitHub Pages deployment workflow
- Created `.github/workflows/deploy.yml` for automatic deployment

#### `20cefd9` — Initial commit: CEFM Ministries website
- Built complete 7-page website from scratch:
  - Home, Leadership, Ministries, Prayer Wall, Donations, Schedule, Live Stream
- Sacred & Modern design with Midnight Blue + Gold color palette
- Responsive layout, smooth animations, interactive elements
- Embedded YouTube live stream player

#### `2ddeff8` — Initial commit
- Repository created

---

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| Total Pages | 10 |
| Total Commits | 18 |
| Missionaries Listed | 115+ |
| States Covered | 6 |
| Churches | 162+ |
| Tamil Songs | 6 |
| Ministry Areas | 14 |
| Development Period | March 1–3, 2026 |

---

## 👨‍💻 Developer

Built by **Akash Kolanchiyapan**

---

> *"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."* — Matthew 28:19
