# Troubleshooting

## Local Build Issues

**Site doesn't start or shows a build error:**

```bash
docker compose down
docker compose up --build
```

Check the logs:

```bash
docker compose logs
```

To inspect inside the container:

```bash
docker compose exec -it jekyll /bin/bash
bundle install
./bin/entry_point.sh
```

**Gemfile changed and build is failing:**

Rebuild the Docker image after any `Gemfile` or `Gemfile.lock` changes:

```bash
docker compose up --build
```

## Deployment Issues

**Site didn't update after pushing:**

1. Check the [Actions tab](https://github.com/mgrau/graulab.org/actions) for build errors.
2. If the action succeeded but the site looks stale, do a hard refresh (`Cmd+Shift+R`).
3. To trigger a manual deployment: Actions → Deploy site → Run workflow.

**GitHub Actions failing:**

Look at the error in the Actions tab. Common causes:

- YAML syntax error in `_config.yml` or a page's front matter
- Missing file referenced in front matter (e.g., a `pdf` or `img` path that doesn't exist)
- Broken BibTeX in `_publications/papers.bib`

## Publications

**Publication not showing up:**

- Check for BibTeX syntax errors (unclosed braces, bad escaping)
- Ensure the `scholar.source` in `_config.yml` points to `/_publications/`
- Rebuild: `docker compose up --build`

## For Framework Issues

For issues with Jekyll, al-folio templates, or the Docker image, see:

- [al-folio Troubleshooting Guide](https://github.com/alshedivat/al-folio/blob/main/TROUBLESHOOTING.md)
- [al-folio GitHub Discussions](https://github.com/alshedivat/al-folio/discussions)
- [al-folio GitHub Issues](https://github.com/alshedivat/al-folio/issues)
