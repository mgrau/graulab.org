# Customization Guide

How to update content on the Grau Lab website and a reference for the customizations made to the [al-folio](https://github.com/alshedivat/al-folio) theme.

## Site Configuration

The main configuration file is `_config.yml`. Key settings:

| Field         | Purpose                           |
| ------------- | --------------------------------- |
| `title`       | Site title ("Grau Lab")           |
| `url`         | `https://www.graulab.org`         |
| `description` | Meta description for SEO          |
| `keywords`    | SEO keywords                      |
| `icon`        | Favicon (currently `favicon.svg`) |

Social links (email, Google Scholar, ORCID, GitHub, etc.) are in `_data/socials.yml`.

## People

People are managed in `_data/people.yml`. The file has four sections:

- `principal_investigator` — PI info (name, photo, role, office, links)
- `graduate_students` — list of grad students
- `undergraduate_students` — list of undergrad researchers
- `alumni` — list of former members (name, role, period only)

**To add a person:**

```yaml
graduate_students:
  - name: Full Name
    img: filename.jpg # photo in assets/img/
    role: Ph.D. Student
    joined: Fall 2026
    research: Brief description of their project
    awards: # optional
      - Award name
```

Photos go in `assets/img/`. The `person_card.liquid` include renders each entry in a card layout.

**To add an alumnus:**

```yaml
alumni:
  - name: Full Name
    role: Ph.D. Student
    period: Fall 2022 – Spring 2026
```

## Publications

Publications are in `_publications/papers.bib` (BibTeX format). This differs from the al-folio default of `_bibliography/papers.bib` — the scholar source is set in `_config.yml`.

**To add a publication**, paste a BibTeX entry into the file:

```bibtex
@article{smith2026,
  author    = {Smith, Jane and Grau, Matt},
  title     = {Title of the paper},
  journal   = PRL,
  year      = {2026},
  volume    = {136},
  pages     = {123456},
  abbr      = {PRL},
  abstract  = {Paper abstract text here.},
  pdf       = {/assets/pdf/smith2026.pdf},
  html      = {https://doi.org/10.1103/...},
  arxiv     = {2601.12345},
  selected  = {true},
  bibtex_show = {true},
}
```

**Custom BibTeX fields** supported by this site:

| Field         | Effect                                      |
| ------------- | ------------------------------------------- |
| `abbr`        | Journal badge shown on the publication card |
| `abstract`    | Shown in an expandable section              |
| `arxiv`       | Links to `arxiv.org/abs/<id>`               |
| `pdf`         | Link to PDF (local path or URL)             |
| `html`        | Link to journal page                        |
| `code`        | Link to code repository                     |
| `selected`    | `{true}` to feature on the homepage         |
| `bibtex_show` | `{true}` adds a "BibTeX" copy button        |
| `award`       | Award description (shown as a note)         |
| `award_name`  | Short badge label for the award             |

Journal abbreviation strings (e.g., `PRL`, `PRA`) are defined at the top of `papers.bib`.

## Research Projects

Research projects are in `_projects/` as Markdown files with YAML front matter:

```markdown
---
layout: page
title: Project Title
description: One-line description shown on the research page.
img: assets/img/projects/myimage.jpg
importance: 1 # lower = higher on the page
category: ion trapping # groups projects by category on /research/
---

Project description here...
```

**Categories** currently in use: `ion trapping`, `precision measurement`.

To link a project page to publications, use `{% cite key1 key2 %}` with `--cited` in the bibliography tag:

```liquid
<span style="display:none">{% cite key1 key2 %}</span>

<div class="publications">
  {% bibliography --cited --group_by none --sort_by year --order descending %}
</div>
```

Project images go in `assets/img/projects/`.

## News

News items are in `_news/` as Markdown files:

```markdown
---
layout: post
date: 2026-03-18 00:00:00-0500
inline: true
---

Short news item text here. No title needed for inline items.
```

- Use `inline: true` for short one-liners shown on the homepage.
- Use `inline: false` (with a `title:` field) for longer posts that get their own page.

News items appear on the homepage (most recent 5) and at `/news/`.

## Teaching

Teaching entries are in `_teaching/` (note: al-folio's default collection name is `_teachings/`). Each file is a Markdown page:

```markdown
---
layout: page
title: PHYS 123 — Course Title
description: Brief description.
importance: 1
---

Course content here...
```

See the [al-folio teaching collection docs](https://github.com/alshedivat/al-folio/blob/main/CUSTOMIZE.md#creating-a-teachings-collection) for full front matter options.

## Gallery

The gallery page is `_pages/gallery.md`. Add images to `assets/img/gallery/` and list them in the page's front matter:

```yaml
images:
  - path: gallery/myimage.jpg
    title: Image caption
```

## Calendar Page

The calendar at `/calendar/` is built with [FullCalendar](https://fullcalendar.io/) connected to a Google Calendar. It is rendered via `_includes/fullcalendar.liquid` and embedded in `_pages/calendar.md`:

```liquid
{%
  include fullcalendar.liquid
  api_key="<Google Calendar API key>"
  calendar_id="<calendar ID>@group.calendar.google.com"
%}
```

The include handles:

- Color-coding events by type (classes, office hours, talks, meetings, travel)
- Showing private events as "Private" instead of `undefined`
- A click-to-expand modal with event details

To change which Google Calendar is shown, update the `api_key` and `calendar_id` in `_pages/calendar.md`.

## Intranet Redirect

`_pages/intranet.md` is a nav-visible page that immediately redirects to `https://internal.graulab.org` via inline JavaScript. No content is needed — the page exists only as a nav link.

---

## Theme Customizations

These SCSS files were modified from the al-folio defaults to implement the Grau Lab color theme:

### `_sass/_variables.scss`

Adds a "Grau" palette block with custom color variables:

```scss
// Cyans — glacial blues
$grau-cyan-bright: #00d4f5; // bright glacial cyan (dark mode accent)
$grau-cyan-mid: #0096c7; // medium cyan (light mode accent)
$grau-cyan-deep: #006d9b; // deep cyan for hover states

// Golds / ambers — Icelandic midnight sun / Death Stranding amber
$grau-gold: #f0c040; // golden highlight (dark mode)
$grau-gold-dark: #8b6508; // dark gold (light mode, WCAG AA compliant)

// Dark backgrounds — volcanic/charcoal
$grau-bg-dark: #0d1117; // very dark background

// Light backgrounds
$grau-bg-light: #f7f7f8; // very light warm gray
```

### `_sass/_themes.scss`

Sets the CSS custom properties for both light and dark modes using the Grau palette variables:

- **Light mode**: warm gray background, dark navy text, deep cyan accent, dark gold highlight
- **Dark mode**: volcanic dark background, light gray text, bright glacial cyan accent, amber gold highlight

### Non-default Directory Layout

| Item                | This site                  | al-folio default           |
| ------------------- | -------------------------- | -------------------------- |
| BibTeX file         | `_publications/papers.bib` | `_bibliography/papers.bib` |
| Teaching collection | `_teaching/`               | `_teachings/`              |

The scholar source is configured in `_config.yml`:

```yaml
scholar:
  source: /_publications/
```

The teaching collection is declared in `_config.yml` under `collections`.
