# Siddiqa — Personal Portfolio

A modern, responsive developer portfolio built with **pure HTML, CSS, and vanilla JavaScript**. Designed for job applications and recruiter-friendly presentation.

## Features

- Dark futuristic UI with purple accent glow effects
- Fully responsive (mobile, tablet, desktop)
- Sticky navbar with active section highlighting
- Smooth scrolling and scroll-to-top button
- Animated page loader
- Scroll reveal animations
- Skill progress bars with hover effects
- Contact form with validation
- SEO-optimized semantic HTML

## Folder Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── resume/
│       └── Siddiqa-Resume.pdf   ← Add your resume here
└── README.md
```

## Quick Start

1. **Clone or download** this folder to your computer.

2. **Add your resume**  
   Place your PDF resume at:
   ```
   assets/resume/Siddiqa-Resume.pdf
   ```

3. **Open the website**  
   Double-click `index.html` or use a local server:

   **VS Code Live Server:**
   - Install the "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

   **Python (if installed):**
   ```bash
   cd portfolio
   python -m http.server 8000
   ```
   Then open: http://localhost:8000

   **Node.js (if installed):**
   ```bash
   npx serve .
   ```

## Customization Guide

### Update Personal Links

In `index.html`, replace placeholder URLs:

| Item | What to change |
|------|----------------|
| GitHub | Project card links & contact social icon |
| LinkedIn | Contact social icon |
| Live Demo | Project card `href="#"` attributes |
| Resume | `assets/resume/Siddiqa-Resume.pdf` |

### Add Project Images

1. Save images in `assets/images/`
2. In `index.html`, replace the gradient placeholders:

```html
<div class="project-card__image">
  <img src="assets/images/project-1.png" alt="Modern Landing Page">
</div>
```

### Change Colors

Edit CSS variables in `style.css`:

```css
:root {
  --bg-primary: #0B0F19;
  --accent: #7C3AED;
  /* ... */
}
```

## Sections

1. **Hero** — Introduction with CTA buttons
2. **About** — Background and highlights
3. **Skills** — HTML, CSS, JavaScript with progress bars
4. **Experience** — Rooman Technologies internship
5. **Projects** — 3 demo project cards
6. **Certifications** — Credential cards
7. **Resume** — PDF download
8. **Contact** — Form + email + social links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

Deploy for free on:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

Upload the entire `portfolio` folder contents to your hosting provider.

## License

Free to use and modify for personal portfolio purposes.

---

**Built by Siddiqa** | HTML · CSS · JavaScript
