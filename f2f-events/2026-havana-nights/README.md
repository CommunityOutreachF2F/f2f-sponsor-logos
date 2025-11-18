# 2026 – Havana Nights Gala (Qgiv HTML Snippets)

This folder contains all section-specific HTML files used to build the **Havana Nights Gala** fundraising page on Qgiv.

---

## 📁 Folder Structure
2026-havana-nights/
│── meta.json # Defines order of sections + event metadata
└── html/ # All individual HTML blocks used on Qgiv
├── 01-hero.html
├── 02-about-the-gala.html
├── 03-event-highlights.html
├── 04-sponsor-strip.html
├── 05-donate-cta.html
├── 06-schedule.html
├── …etc

---

## 📋 meta.json

This file tells the **Event Sections Viewer** which order to display sections in.

Example:
{
"event_name": "Havana Nights Gala",
"event_date": "January 31, 2026",
"order": [
"01-hero.html",
"02-about-the-gala.html",
"03-sponsor-a-client.html",
"04-sponsor-strip.html",
"05-event-highlights.html",
"06-schedule.html"
]
}

---

## 🧩 How to paste into Qgiv

1. Open `/f2f-tools/sections-viewer.html`.
2. Select **2026 – Havana Nights Gala**.
3. Click **Copy HTML** next to any section.
4. Paste directly into Qgiv’s **HTML Block** editor.
5. Preview → Save.

Repeat for all sections needed.

**Tip:**  
Qgiv sanitizes some tags. If a style breaks, let me know and I'll output a Qgiv-safe version.

---

## 🛠 Updating or Reordering Sections

- Change the filenames in `/html`
- Update the sequence inside `meta.json`
- The Sections Viewer will auto-refresh on reload

---

## 🙌 Need another section?
Say the word. We can generate:
- testimonial blocks  
- video embeds  
- sponsor carousels  
- countdown timers  
