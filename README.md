# RYUMA-OS — Portfolio of Althaf Nezam Rawther

> Building robots and AI that solve real problems.

A personal portfolio styled as a cyberpunk desktop operating system. Click the icons to open draggable windows, use the taskbar and start menu, or type commands in the built-in terminal.

**Live site:** https://ryuma33.github.io

## Features

- Boot screen, then a neon synthwave desktop
- Draggable, focusable windows you can minimize and maximize, with a taskbar and live clock
- Start menu with social links
- Working terminal (`help`, `whoami`, `projects`, `skills`, `contact`, `open <app>`, …)
- Full-screen windows on phones, so it works on mobile too

## Tech

React · Vite · Tailwind CSS · lucide-react icons

## Editing the content

All of the text lives in **`src/data.js`**: name, about, projects, skills, experience, certifications and contact links. Edit that file and the site updates.

- Add items to `experience` or `certifications` and those apps appear on the desktop automatically.
- To use a photo instead of initials, put `avatar.jpg` in `public/` and set `photo: '/avatar.jpg'`.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Deploy (GitHub Pages)

1. Create a repo named **`ryuma33.github.io`** on GitHub and push this project to it.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Every push to `main` builds and deploys the site to https://ryuma33.github.io (see `.github/workflows/deploy.yml`).
