# Installation and Deployment

## Prerequisites

- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)

## Local Development

Clone the repository and start the development server:

```bash
git clone git@github.com:mgrau/graulab.org.git
cd graulab.org
docker compose pull && docker compose up
```

The site will be available at [http://localhost:8080](http://localhost:8080). Changes to source files are reflected automatically (Jekyll watches for changes and rebuilds).

To stop the server:

```bash
docker compose down
```

If you change `Gemfile` or `Gemfile.lock` (Ruby dependencies), rebuild the Docker image:

```bash
docker compose up --build
```

### Formatting

Before committing, run [Prettier](https://prettier.io/) to format all files:

```bash
# First time only
npm install --save-dev prettier @shopify/prettier-plugin-liquid

# Format
npx prettier . --write
```

A pre-commit hook runs Prettier automatically if you have it installed.

## Deployment

The site deploys automatically via GitHub Actions whenever you push to the `main` branch. The compiled site is built and pushed to the `gh-pages` branch, which GitHub Pages serves at [www.graulab.org](https://www.graulab.org).

**To deploy: commit your changes and push to `main`.**

```bash
git add <files>
git commit -m "your message"
git push origin main
```

GitHub Actions will run the build and deploy within a few minutes. You can monitor progress in the [Actions tab](https://github.com/mgrau/graulab.org/actions).

### Manual Deployment

To trigger a deployment manually without pushing new changes:

1. Go to the [Actions tab](https://github.com/mgrau/graulab.org/actions)
2. Click **Deploy site** in the left sidebar
3. Click **Run workflow**

### Branch Notes

- `main` — source code; this is what you edit
- `gh-pages` — compiled output, managed by GitHub Actions; **do not edit directly**

### Custom Domain

The custom domain `www.graulab.org` is configured via a `CNAME` file at the repo root. DNS is managed separately. No action needed when deploying.
