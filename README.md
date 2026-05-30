# Deep Majumdar — Portfolio

Modern React portfolio for **Deep Majumdar** (Data Science & AI), built with Vite and React.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Customize content

| What | Where |
|------|--------|
| Name, contact, GitHub username | `src/data/personal.js` |
| Projects | `src/data/projects.json` |
| Education, skills, certs, blog, etc. | `src/data/*.json` |
| Internship | `src/data/internship.json` |
| Chatbot FAQ | `src/utils/chatbotResponses.js` |

## Assets to add (placeholders)

1. **Profile photo** — `public/images/profile.jpg`
2. **Resume PDF** — `public/resume.pdf`
3. **Certificates** — `public/certificates/*.pdf`
4. **Project reports** — `public/reports/*.pdf`
5. **Project screenshots** — replace paths in `projects.json` (defaults use `public/images/project-placeholder.svg` via copied paths)

Update real URLs for GitHub, demo links, email, phone, and LinkedIn in `personal.js` and `projects.json`.

## Features

- All 13 sections with smooth-scroll navigation
- Dark / light mode
- Project search & category filters
- Project timeline bar & detail modal with screenshot carousel
- Skills progress bars
- Interactive experience timeline
- GitHub Readme Stats integration
- Rule-based FAQ chatbot
- LocalStorage visitor counter
- Responsive layout

## GitHub stats username

Set `githubUsername` in `src/data/personal.js` (default: `deepmajumdar`).
