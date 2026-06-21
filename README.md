# He Zhao Academic Website

Astro-based academic website for GitHub Pages. Routine content updates live in YAML files and do not require editing HTML.

## Local Setup

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:4321/`.

## Editing Content

- Profile: `src/data/profile.yaml`
- Publications: `src/data/publications.yaml`
- Professional services: `src/data/services.yaml`
- Talks: `src/data/talks.yaml`

Profile summary and highlight entries support inline Markdown links:

```yaml
summary:
  - I am a researcher at [CSIRO](https://www.csiro.au/).
```

Publication entries use this shape:

```yaml
- title: Example Paper
  authors: A. Author, H. Zhao
  venue: ICML
  date: 2026-06-19
  note: Spotlight
  topics:
    - LLMs
    - Tabular Data
  selected: true
  links:
    - label: official
      url: https://example.com/
    - label: arxiv
      url: https://arxiv.org/abs/0000.00000
    - label: code
      url: https://github.com/example/project
```

The displayed year is derived from `date`. Topic filter options are derived automatically from the unique topics in `publications.yaml`.

Publication link labels are `official`, `arxiv`, `code`, `award`, and `slides`. The official link is applied to the paper title; other links appear as actions.

## Headshot

The current image is stored at `public/images/headshot.jpg` and configured in `src/data/profile.yaml`:

```yaml
headshot:
  initials: HZ
  src: /images/headshot.jpg
  alt: Headshot of He Zhao
```

## Checks

```bash
npm run check
npm run build
```

The static output is generated in `dist/`.

## Python Helper Environment

The optional Python environment contains the scraping and YAML migration utilities used while rebuilding content:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Deployment

The workflow at `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages after a push to `main`.

The recovered workspace currently contains a nested Git repository at `dist/.git`. Preserve or back up that repository before running commands that replace the existing `dist/` directory.
