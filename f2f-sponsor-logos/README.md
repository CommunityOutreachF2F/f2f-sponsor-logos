# F2F Sponsor Logos – Asset Library

This folder stores **all sponsor logos** used by Foundations to Freedom across all events.  
These files function like a CDN — meaning they can be linked from websites, forms, Qgiv pages, and documents.

---

## 🧭 Logo File Naming Rules

To keep everything consistent and easy to automate:

### **Format**
company-name--variant.ext

### **Required Fields**
- **company-name** → lowercase, hyphens instead of spaces  
  *Example:* `recovery-village`, `southern-stone-communications`

- **variant** → describes the purpose or orientation  
  Common variants:
  - `primary`
  - `secondary`
  - `horizontal`
  - `vertical`
  - `badge`

- **ext** → `.png`, `.jpg`, `.svg`

### **Examples**
recovery-village--primary.png
tj-logo-horiz--primary.svg
southern-stone-communications--primary.jpg

---

## 📄 manifest.json

All logos must be registered in **manifest.json** for the Sponsor Asset Library tool.  
Each entry includes:

- company
- event
- tier
- filename
- variant
- format
- tier_rank (controls display order)
- url (optional override)
- path (optional override)

Example row:
{
"company": "Recovery Village",
"event": "2025 Havana Nights",
"tier": "Caribbean Coral Sponsors",
"tier_rank": 5,
"filename": "recovery-village--primary.png",
"variant": "primary",
"format": "png"
}

---

## 📂 Base URL

Tools read logos from: https://communityoutreachf2f.github.io/f2f-digital-hub/f2f-sponsor-logos/

---

## 🔧 Used By

- **Sponsor Asset Library**
- **Event Sections Viewer**
- **Qgiv HTML snippets**
- **Marketing materials**

---

If you add logos, update the manifest, or need help automating tier updates — just ask.

