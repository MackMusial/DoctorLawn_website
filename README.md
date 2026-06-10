# DoctorLawn – Website

Static informational website for **DoctorLawn**, a professional fertilization and lawn restoration service based in Southeast Michigan (Wayne, Monroe, and Oakland counties).

## Structure

Single-page scrolling site with anchor navigation.

```
website/
├── index.html          # Single-page site — all sections
├── css/
│   └── style.css       # All styles — responsive, black/green brand palette
├── js/
│   └── main.js         # Navigation toggle and scroll behavior
└── images/
    ├── doctor-mascot.jpg        # Doctor mascot character
    ├── van.jpg                  # DoctorLawn service van
    └── green-grass-bare-feet.png  # Brand tagline graphic (transparent)
```

## Sections

| Anchor | Content |
|--------|---------|
| `#home` | Hero — tagline, phone CTA, brand graphic |
| `#about` | Owner bio (Jeff Musial) + service van photo, Why Choose section |
| `#services` | Six service cards — fertilization, weed control, restoration, etc. |
| `#gallery` | Photo gallery placeholders |
| `#videos` | Video placeholders + social follow links |
| `#testimonials` | Six customer reviews |
| `#contact` | Phone, email, hours, location, social links |

## Running Locally

No build step required. Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Hosting (Beginner Guide)

Plain HTML — extremely easy and free to host. Recommended for a beginner: **Netlify Drop**.

---

### Option 1 — Netlify Drop (Easiest, Free, 5 Minutes)

1. Go to **[netlify.com/drop](https://app.netlify.com/drop)**.
2. Find the `website` folder (the one with `index.html`) in File Explorer.
3. Drag the entire folder into the Netlify drop zone.
4. Done — you get a live link like `https://random-name-123.netlify.app` in ~10 seconds.

**To use a custom domain** (e.g. `www.doclawn.com`): create a free Netlify account, claim the site, go to **Site settings → Domain management**, and follow the prompts. You'll need a domain from a registrar like Namecheap (~$10–$15/year) and point its DNS to Netlify.

---

### Option 2 — GitHub Pages (Free, Auto-deploys)

1. Create a free account at [github.com](https://github.com).
2. Create a new repository named `drlawn-website`.
3. Upload all files from the `website` folder.
4. Go to **Settings → Pages**, set source to `main` branch, click Save.
5. Site goes live at `https://yourusername.github.io/drlawn-website`.

---

### Option 3 — Shared Hosting (Best for Custom Domain + Email)

Best option if you want a professional email like `jeff@doclawn.com`.

Popular providers (~$3–$10/month): **Bluehost**, **SiteGround**, **HostGator**

1. Sign up and register your domain during checkout.
2. Log into **cPanel** → **File Manager**.
3. Upload all files from `website/` into the `public_html` folder.
4. Site is live at your domain.

---

### Which Should I Pick?

| Situation | Recommendation |
|-----------|---------------|
| Just want something live fast, free | Netlify Drop |
| Comfortable with GitHub, want free auto-deploys | GitHub Pages |
| Need custom domain + professional email | Shared hosting |

---

## Tech Stack

- Plain HTML5, CSS3, vanilla JavaScript — no frameworks or build tools
- Single-page with smooth scroll anchor navigation
- Responsive layout with mobile hamburger nav
- CSS custom properties for the brand color palette
- Font Awesome 6 for social icons

## Contact

- **Phone:** 313-487-4949
- **Email:** jeff@doclawn.com
- **Service Area:** Wayne · Monroe · Oakland Counties, Southeast Michigan
