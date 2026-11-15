# davidmalutan site

Personal site of David Malutan. Astro, static, hosted on Cloudflare Pages.

## Commands

| Command | What it does |
|---|---|
| `npm install` | install dependencies (once) |
| `npm run dev` | local site at http://localhost:4321 |
| `npm run build` | production build into `dist/` |
| `npm run preview` | serve the production build locally |

## Where things live

| What | File |
|---|---|
| Posts | `src/content/posts/<slug>.md` |
| Projects | `src/content/projects/<slug>.md` |
| About text | `src/content/pages/about.md` |
| Now page | `src/content/pages/now.md` |
| Work, achievements, links, CRT program | `src/data/site.ts` |
| Colours (dark/light) | `src/styles/tokens.css` |
| Desk scene | `src/components/Scene.astro` |
| Photo on the desk | `public/img/me.webp` |
| CV (public version, no phone number) | `public/cv/David_Malutan_CV.pdf` |
| Project demo videos | `public/videos/` |

## Publishing

Push to `main`. Cloudflare Pages builds with `npm run build` and serves `dist/`.

Full guide (Romanian): `ghid-utilizare.pdf`.
