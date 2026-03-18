# Grau Lab Website

Source code for [www.graulab.org](https://www.graulab.org) — the website for Matt Grau's experimental atomic physics group at Old Dominion University.

Built with [Jekyll](https://jekyllrb.com/) using the [al-folio](https://github.com/alshedivat/al-folio) theme.

## Local Development

Install dependencies and start the development server:

```bash
bundle install
bundle exec jekyll serve
```

The site will be available at [http://localhost:4000](http://localhost:4000). Jekyll watches for changes and rebuilds automatically.

## Deployment

The site deploys automatically via GitHub Actions whenever you push to `main`. The compiled output is pushed to the `gh-pages` branch, which GitHub Pages serves at [www.graulab.org](https://www.graulab.org).

```bash
git add <files>
git commit -m "your message"
git push origin main
```

Monitor the build in the [Actions tab](https://github.com/mgrau/graulab.org/actions). To trigger a manual re-deploy without a new commit: Actions → Deploy site → Run workflow.

**Branches:**

- `main` — source code (edit this)
- `gh-pages` — compiled output, managed by GitHub Actions (do not edit)

## Site Structure

| Page         | URL              | Source                                                   |
| ------------ | ---------------- | -------------------------------------------------------- |
| About        | `/`              | `_pages/about.md`                                        |
| People       | `/people/`       | `_pages/people.md`, `_data/people.yml`                   |
| Research     | `/research/`     | `_pages/research.md`, `_projects/`                       |
| Publications | `/publications/` | `_pages/publications.md`, `_publications/papers.bib`     |
| Teaching     | `/teaching/`     | `_pages/teaching.md`, `_teaching/`                       |
| Gallery      | `/gallery/`      | `_pages/gallery.md`                                      |
| Intranet     | `/intranet/`     | `_pages/intranet.md` (redirects to internal.graulab.org) |

## Updating Content

### People

Edit `_data/people.yml`. The file has four sections: `principal_investigator`, `graduate_students`, `undergraduate_students`, and `alumni`.

```yaml
graduate_students:
  - name: Full Name
    img: filename.jpg # photo in assets/img/
    role: Ph.D. Student
    joined: Fall 2026
    research: Brief project description
    awards: # optional
      - Award name
```

Alumni entries only need `name`, `role`, and `period`.

### Publications

Add BibTeX entries to `_publications/papers.bib`. Note: this is a non-default location — al-folio normally uses `_bibliography/papers.bib`.

```bibtex
@article{smith2026,
  author      = {Smith, Jane and Grau, Matt},
  title       = {Title of the paper},
  journal     = PRL,
  year        = {2026},
  abbr        = {PRL},
  abstract    = {Abstract text.},
  pdf         = {/assets/pdf/smith2026.pdf},
  html        = {https://doi.org/10.1103/...},
  arxiv       = {2601.12345},
  selected    = {true},
  bibtex_show = {true},
}
```

Journal string macros (e.g. `PRL`, `PRA`) are defined at the top of `papers.bib`. The `selected = {true}` field features the paper on the homepage.

### Research Projects

Add or edit Markdown files in `_projects/`. Front matter controls display on the Research page:

```markdown
---
layout: page
title: Project Title
description: One-line description.
img: assets/img/projects/myimage.jpg
importance: 1 # lower = shown first
category: ion trapping # current categories: "ion trapping", "precision measurement"
---
```

To cite relevant publications on a project page:

```liquid
<span style="display:none">{% cite key1 key2 %}</span>
<div class="publications">
  {% bibliography --cited --group_by none --sort_by year --order descending %}
</div>
```

### News

Add Markdown files to `_news/`. For short items shown inline on the homepage:

```markdown
---
layout: post
date: 2026-03-18 00:00:00-0500
inline: true
---

News item text here.
```

### Teaching

Add Markdown files to `_teaching/` (note: al-folio's default collection is `_teachings/`). The collection name is configured in `_config.yml`.

### Gallery

Add images to `assets/img/gallery/` and list them in the front matter of `_pages/gallery.md`.

### Calendar

The calendar at `/calendar/` uses [FullCalendar](https://fullcalendar.io/) connected to a Google Calendar via `_includes/fullcalendar.liquid`. The API key and calendar ID are set in `_pages/calendar.md`. Events are color-coded by type (classes, office hours, talks, meetings, travel) and private events display as "Private".

## Customizations from al-folio

Changes made to the upstream [al-folio](https://github.com/alshedivat/al-folio) theme:

- **Color theme**: Custom "Grau" palette (Icelandic/volcanic aesthetic) defined in `_sass/_variables.scss` and applied in `_sass/_themes.scss`. Light mode uses warm gray + deep cyan + dark gold; dark mode uses volcanic dark + glacial cyan + amber.
- **Publications directory**: `_publications/papers.bib` instead of `_bibliography/papers.bib`. The scholar source is set in `_config.yml` under `scholar.source`.
- **Teaching collection**: `_teaching/` instead of `_teachings/`. Declared in `_config.yml` under `collections`.
- **Calendar page**: FullCalendar 6 integration at `/calendar/` via `_includes/fullcalendar.liquid`.
- **Intranet redirect**: `_pages/intranet.md` redirects to `https://internal.graulab.org` via inline JavaScript.

## References

- [al-folio](https://github.com/alshedivat/al-folio) — Jekyll theme (FAQ, troubleshooting, full feature docs)
- [Jekyll documentation](https://jekyllrb.com/docs/)
- [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) — BibTeX/publications support
