# Foundations to Freedom – Digital Hub

Welcome to the **F2F Digital Hub**, a central repository for all digital assets, tools, and event-ready HTML used by Foundations to Freedom. This repo is designed to:

- Keep sponsor logos organized and accessible.
- Store reusable HTML snippets for Qgiv event pages.
- Provide internal tools such as the **Sponsor Asset Library** and **Event Sections Viewer**.
- Support future events with a clear, scalable folder structure.

---

## 📂 Repository Structure
f2f-digital-hub/
│
├── f2f-sponsor-logos/ # Public-facing CDN-style library of all sponsor logo files
│ ├── manifest.json # Metadata for the Sponsor Asset Library
│ └── *.png / *.jpg / *.svg
│
├── f2f-events/
│ ├── 2026-havana-nights/ # Event-specific HTML blocks used in Qgiv
│ │ ├── html/ # All individual section snippets
│ │ └── meta.json # Defines display order + event metadata
│ └── TEMPLATE-next-event/ # (prebuilt skeleton for future use)
│
├── f2f-tools/
│ ├── f2f-sponsor-asset-library.html # Internal logo viewer tool
│ ├── sections-viewer.html # Tool for previewing event HTML blocks
│ └── sections.css
│
└── .nojekyll

---

## 🧰 Internal Tools

### **1. Sponsor Asset Library**
Use to view all logos, sort by tier/event, filter, and copy direct CDN URLs.
- URL: `https://communityoutreachf2f.github.io/f2f-digital-hub/f2f-tools/f2f-sponsor-asset-library.html`
- Reads from: `f2f-sponsor-logos/manifest.json`

### **2. Event Sections Viewer**
Preview and copy HTML blocks for any event.
- URL: `/f2f-tools/sections-viewer.html`
- Reads from: `f2f-events/<event>/meta.json`

---

## 🧩 Adding a New Sponsor Logo

1. Upload the logo file to `f2f-sponsor-logos/`.
2. Follow file naming rules (see sponsor-logos README).
3. Add a new JSON row to `f2f-sponsor-logos/manifest.json`.
4. Refresh the Sponsor Asset Library — it will appear instantly.

---

## 🗓 Creating a New Event

Duplicate the folder:
`f2f-events/TEMPLATE-next-event/` → rename it (e.g., `2027-spring-fundraiser`)

Then update:
- `meta.json`
- any HTML snippets in `/html`

The Sections Viewer will automatically detect the new event once added to the selector list.

---

## 🏁 Questions?
This repo is intentionally built to be:
- simple  
- organized  
- scalable  
- and easy to maintain  

If you need additional tools, automation, or restructuring, we can add them anytime.
