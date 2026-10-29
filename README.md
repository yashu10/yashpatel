# Portfolio Website

A fast, responsive, static portfolio site (plain HTML, CSS and a little JavaScript). No build step, no dependencies, so it deploys anywhere.

```
index.html     page content
styles.css     all styles
script.js      mobile menu, scroll animations
favicon.svg    browser tab icon
assets/img/    case study covers and hero image
```

## 1. Customise it (do this first)

Search the project for `TODO` and replace:

| What | Where |
|---|---|
| Your name, hero text, about text | `index.html` |
| Case study links (7 cards + 3 "More work" cards) | `href="#"` in `index.html` → your Behance links |
| Email and social links (LinkedIn, Behance, Dribbble) | contact section in `index.html` |
| Resume | add your PDF as `assets/resume.pdf` |
| Your photo | add `assets/img/photo.jpg` (4:5 ratio). Until then a placeholder shows |
| Site URL for link previews | `og:` meta tags in `index.html` (optional) |

To change a cover image, replace the PNG in `assets/img/` with a new one (same file name, 808 x 632 or larger).

## 2. Run it locally

Just open `index.html` in your browser. Or, for a local server:

```bash
npx serve .
```

## 3. Deploy

### Option A: Vercel (recommended)

1. Push this folder to a GitHub repository.
2. Go to vercel.com → **Add New → Project** → import the repository.
3. Framework preset: **Other**. Leave the build command and output directory empty.
4. Click **Deploy**. You get a `your-project.vercel.app` link. Add your own domain under **Settings → Domains**.

### Option B: GitHub Pages

1. Push this folder to a GitHub repository (files at the repository root).
2. Repository **Settings → Pages**.
3. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. After a minute the site is live at `https://<your-username>.github.io/<repository-name>/`.

All links in the project are relative, so both options work without changes.

## Git commands (first time)

```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

## Notes

- Fonts load from Google Fonts (Plus Jakarta Sans).
- Images are 1x exports from Figma. For sharper images on retina screens, export the covers from Figma at 2x and replace the files.
- The design source is in Figma (page "Portfolio Website").
