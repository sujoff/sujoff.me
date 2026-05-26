# Sujan P. – Personal Website

This repository contains the source code for my personal website, built with Astro and deployed on Vercel.

## About

My name is Sujan P., a Linux Engineer focused on server infrastructure, automation, hosting environments, and production troubleshooting.

I work on:

* Linux server administration
* Plesk, LiteSpeed, Nginx, Apache
* MariaDB/MySQL
* Backup and migration workflows (rsync, SSH-based transfers)
* DNS, SSL, email configuration
* Performance tuning and security hardening


The goal is clarity, reproducibility, and operational depth.

---

## Project Structure

```text
├── public/               # Static assets (images, fonts, favicon)
│   ├── assets/          # Images for blog posts
│   └── fonts/           # Web fonts
├── src/
│   ├── assets/          # Icons and images used in components
│   ├── components/      # Reusable UI components
│   │   └── ui/          # React components
│   ├── content/         # Content collections
│   │   └── blog/        # Blog posts in Markdown format (organized by year)
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global styles and CSS
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── vercel.json          # Vercel deployment configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.mjs  # Tailwind CSS configuration
└── LICENSE              # Licensing information
```

---

## Commands

`brew install node`
`brew install pnpm`
`pnpm add unist-util-visit`


| Command           | Action                                            |
| ----------------- | ------------------------------------------------- |
| `pnpm install`     | Install project dependencies                      |
| `pnpm run dev`     | Start local development server (`localhost:4321`) |
| `pnpm run build`   | Build production site to `./dist/`                |
| `pnpm run preview` | Preview the production build locally              |

---

## Deployment

The site is configured for deployment on Vercel.

Connect the GitHub repository to Vercel. Every push to the main branch triggers an automatic build and deployment.

---

## License

* **Documentation & Blog Content**: CC BY 4.0
* **Source Code & Snippets**: MIT License

Refer to the LICENSE file for full details.

---

## Acknowledgment

The initial structure was inspired from the [AstroPaper theme](https://astro-paper.pages.dev/) brought you by [Sat Naing](https://github.com/satnaing). The clean layout and modular architecture provided a solid foundation, later customized to align with infrastructure-focused technical writing and documentation workflows.

All thanks to Peter Steinberger too, My Idol <3
