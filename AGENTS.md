# Agent Guidelines for graulab.org

Website for the Grau Lab at Old Dominion University, built with Jekyll and the al-folio theme.

## Documentation

- **[README.md](README.md)** — Local development, deployment, content editing, and customizations
- **[.github/copilot-instructions.md](.github/copilot-instructions.md)** — Tech stack, build, CI/CD, common pitfalls

## Essential Commands

```bash
# Install dependencies (first time)
bundle install

# Start local dev server
bundle exec jekyll serve
# Site runs at http://localhost:4000

# Format before committing
npx prettier . --write
```

## Key Site Conventions

- **Publications:** `_publications/papers.bib` (not `_bibliography/`)
- **Teaching collection:** `_teaching/` (not `_teachings/`)
- **Deploy:** push to `main` — GitHub Actions builds and deploys to `gh-pages`
- **YAML errors:** quote strings with special characters: `title: "My: Cool Site"`

## Code-Specific Instructions

| File Type                                     | Instruction File                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Markdown content (`_posts/`, `_pages/`, etc.) | [markdown-content.instructions.md](.github/instructions/markdown-content.instructions.md)       |
| YAML config (`_config.yml`, `_data/`)         | [yaml-configuration.instructions.md](.github/instructions/yaml-configuration.instructions.md)   |
| BibTeX (`_bibliography/`)                     | [bibtex-bibliography.instructions.md](.github/instructions/bibtex-bibliography.instructions.md) |
| Liquid templates (`_includes/`, `_layouts/`)  | [liquid-templates.instructions.md](.github/instructions/liquid-templates.instructions.md)       |
| JavaScript (`_scripts/`)                      | [javascript-scripts.instructions.md](.github/instructions/javascript-scripts.instructions.md)   |
