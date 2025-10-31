F2F Sponsor Logos

A simple, public library of sponsor logos for Foundations to Freedom.
Use these files in web pages, donation forms, and documents by linking directly to the images.

Public base URL:
https://communityoutreachf2f.github.io/f2f-sponsor-logos/

Structure
/ (repo root)
  .nojekyll              # keep this empty so Pages serves files as-is
  /logos/
    /shared/             # reusable logos across events
      downer-law--primary.png
      downer-law--white.png
    /2025-havana-nights/ # event-specific assets
      /palm-green/
        subaru-daytona--primary.png
        subaru-daytona--badge-240.png
        subaru-daytona--badge-480.png
      /tropical-blue/
        ...
File naming
company-name--variant.ext
company-name: lowercase, words separated with hyphens
variant: primary, white, black, or size like badge-240, badge-480
ext: use svg when available; otherwise png or jpg
Examples:
downer-law--primary.svg
downer-law--white.svg
subaru-daytona--badge-240.png
How to upload
Go to the Code tab → Add file → Upload files (or create folders first with Create new file and a logos/.../readme.txt placeholder).
Commit directly to main.
Keep original resolution. If a sponsor sends JPEG with a solid background and you have time, remove the background and save as PNG.
How to get a public URL
Click the image in the repo.
Use the Pages URL pattern:
https://communityoutreachf2f.github.io/f2f-sponsor-logos/<path-and-filename>
Examples
https://communityoutreachf2f.github.io/f2f-sponsor-logos/logos/shared/downer-law--primary.svg
https://communityoutreachf2f.github.io/f2f-sponsor-logos/logos/2025-havana-nights/palm-green/subaru-daytona--badge-240.png
Note: URLs are case-sensitive and spaces must be encoded as %20 (avoid spaces in filenames).
Embed examples
Basic image
<img src="https://communityoutreachf2f.github.io/f2f-sponsor-logos/logos/shared/downer-law--primary.svg"
     alt="Downer Law" loading="lazy" decoding="async" style="height:48px; width:auto;">
Responsive raster badge
<img
  src="https://communityoutreachf2f.github.io/f2f-sponsor-logos/logos/2025-havana-nights/palm-green/subaru-daytona--badge-240.png"
  srcset="
    https://communityoutreachf2f.github.io/f2f-sponsor-logos/logos/2025-havana-nights/palm-green/subaru-daytona--badge-480.png 480w,
    https://communityoutreachf2f.github.io/f2f-sponsor-logos/logos/2025-havana-nights/palm-green/subaru-daytona--badge-240.png 240w"
  sizes="(min-width:900px) 240px, 160px"
  alt="Subaru Daytona" loading="lazy" decoding="async" style="height:auto;">
Logo strip CSS
<ul class="sponsor-logos">
  <li><img src="https://communityoutreachf2f.github.io/f2f-sponsor-logos/logos/shared/downer-law--primary.svg" alt="Downer Law"></li>
  <li><img src="https://communityoutreachf2f.github.io/f2f-sponsor-logos/logos/2025-havana-nights/palm-green/subaru-daytona--primary.png" alt="Subaru Daytona"></li>
</ul>

<style>
.sponsor-logos {display:flex; flex-wrap:wrap; gap:16px; align-items:center; margin:0; padding:0; list-style:none;}
.sponsor-logos img {height:48px; width:auto; object-fit:contain;}
@media (min-width: 900px) {.sponsor-logos img {height:60px;}}
</style>
Best practices
Prefer SVG when possible. If not, use transparent PNG and keep at least 800–1000 px width.
Do not stretch images in CSS. Control display via height and let width:auto.
If you replace a file with the same name, all existing embeds will automatically use the new version.
Keep a tracker (sheet) with: Company, Event, Tier, Brand Hex, Approved Variants, Source File, Public URLs, Approval Date, Notes.
Requesting assets from sponsors (copy/paste)
“Could you please send your official logo as SVG or transparent PNG, at least 1000 px wide? If you have white/black variants, please include those too, along with brand color hex codes. This will ensure clean display on our website, gala booklet, and sponsor wall.”
Troubleshooting
404 Not Found → Check the exact path, filename case, and that the file is committed to main.
Spaces in URLs → Replace spaces with %20, or avoid spaces in filenames.
Theme/Jekyll issues → Add an empty file named .nojekyll to the repo root.
Private repo → GitHub Pages for public URLs requires this repo to be public.
Optional upgrades
Map a custom domain like https://cdn.foundationstofreedom.org/... by adding a CNAME in Settings → Pages → Custom domain and a DNS CNAME record.
Move to S3/Cloudflare R2 later with the same folder and filename conventions for enterprise caching and logs.
