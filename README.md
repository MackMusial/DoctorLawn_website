# Dr. Lawn – Website

Static marketing website for **Dr. Lawn**, a professional fertilizing and lawn nutrition service based in Michigan.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home page — hero, features, services preview, CTA |
| `services.html` | Full services listing |
| `about.html` | About the company |
| `gallery.html` | Photo gallery |
| `contact.html` | Contact form and quote request |

## Project Structure

```
website/
├── index.html
├── about.html
├── contact.html
├── gallery.html
├── services.html
├── css/
│   └── style.css      # All styles — responsive, green brand palette
└── js/
    └── main.js        # Navigation toggle and interactive behavior
```

## Running Locally

No build step required. Open any `.html` file directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Hosting on the Internet (Beginner Guide)

This site is made of plain HTML files, which means it is extremely easy and **free** to host online. The recommended option for a complete beginner is **Netlify Drop** — no account, no terminal, no coding required.

---

### Option 1 — Netlify Drop (Easiest, Free, 5 Minutes)

Netlify is a hosting company that lets you drag and drop your website folder and have it live on the internet instantly.

1. Go to **[netlify.com/drop](https://app.netlify.com/drop)** in your browser.
2. Open your file explorer (Windows Explorer or Mac Finder) and find the `website` folder — the one that contains `index.html`.
3. Drag that entire folder into the big box on the Netlify page that says "Drag and drop your site folder here."
4. Wait about 10 seconds. Netlify will give you a link like `https://random-name-123.netlify.app` — that is your live website.
5. You can share that link with anyone and they can visit the site.

**To use your own domain name** (e.g. `www.drlawn.com`) instead of the random link:
- Create a free Netlify account, claim the site, then go to **Site settings → Domain management** and follow the prompts to add your domain.
- You will also need to buy a domain name from a registrar like **Namecheap** or **Google Domains** (typically $10–$15/year), then point it at Netlify by updating a setting called the DNS record — Netlify walks you through this step by step.

---

### Option 2 — GitHub Pages (Free, Stays in Sync with Code)

If you want updates you make to the code to automatically go live, GitHub Pages is a great free option.

1. Create a free account at **[github.com](https://github.com)**.
2. Click **"New repository"**, name it `drlawn-website`, and click **Create repository**.
3. Upload all the files in the `website` folder by clicking **"uploading an existing file"** on the repository page.
4. Once uploaded, go to **Settings → Pages**.
5. Under **Source**, select `main` branch and click **Save**.
6. GitHub will give you a free URL like `https://yourusername.github.io/drlawn-website` within a minute or two.

To use a custom domain, enter it in the **Custom domain** field on the same Pages settings screen and follow the DNS instructions.

---

### Option 3 — Shared Web Hosting (Best for Custom Domain + Email)

If you want a custom domain **and** a professional email address like `info@drlawn.com`, a shared hosting plan is the most practical choice.

Popular providers (all beginner-friendly, roughly $3–$10/month):
- **Bluehost**
- **SiteGround**
- **HostGator**

General steps:
1. Sign up for a plan and register your domain name during checkout (or bring one you already own).
2. Log into the control panel (called **cPanel**) that the host provides.
3. Find the **File Manager** tool inside cPanel.
4. Navigate to the `public_html` folder — this is the folder the internet can see.
5. Upload all the files from your `website` folder directly into `public_html`.
6. Your site is now live at your domain. No further steps needed.

---

### Which Option Should I Pick?

| Situation | Recommendation |
|-----------|---------------|
| Just want something live right now, free | Netlify Drop |
| Comfortable with GitHub, want free auto-deploys | GitHub Pages |
| Need a custom domain + professional email | Shared hosting (Bluehost, SiteGround) |

---

## Tech Stack

- Plain HTML5, CSS3, and vanilla JavaScript — no frameworks or dependencies
- Responsive layout with mobile hamburger nav
- CSS custom properties for the brand color palette

## Contact

- Phone: (313) 487-4949
- Email: info@drlawn.com
