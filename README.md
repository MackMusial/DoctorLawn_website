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

## Tech Stack

- Plain HTML5, CSS3, and vanilla JavaScript — no frameworks or dependencies
- Responsive layout with mobile hamburger nav
- CSS custom properties for the brand color palette

## Contact

- Phone: (313) 487-4949
- Email: info@drlawn.com
