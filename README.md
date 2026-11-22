# Malek Sharo — portfolio

A static, single-page portfolio. No build step and no dependencies.

```
index.html              page shell and meta tags
data/portfolio.js       ALL content: profile, experience, projects
assets/css/style.css    how it looks
assets/js/app.js        renders the page from the data and adds the motion
assets/img/projects/    one folder per project: icon.png, screen-1.png …
```

## Editing content

Everything on the page comes from `data/portfolio.js`. The comment at the top of that file documents every field. To add a project, add one object to `projects`; set `featured: false` for a short row, `hidden: true` to keep an entry out of sight.

## Preview locally

```bash
python -m http.server 4173
```

Then open http://localhost:4173.

## Hosting

Served by GitHub Pages straight from the `main` branch. Every push updates the live site.
