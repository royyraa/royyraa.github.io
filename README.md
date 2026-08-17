# Rajarshi Roy — Academic Website

Personal academic website for Rajarshi Roy, PhD, computational biophysicist and Postdoctoral Research Associate at Purdue University.

The site is built with Astro and designed to grow from an individual researcher portfolio into a future faculty or research-lab website. Its shared layouts, navigation, structured publication data, and page-based architecture can accommodate future People, Teaching, News, and Join Us sections without a redesign.

## Routes

- `/` — research-story homepage
- `/research` — research themes and representative work
- `/publications` — complete publication archive with DOI links
- `/software-methods` — computational methods and scientific computing
- `/professional-service` — peer review, conference service, mentoring, and presentations
- `/cv` — academic overview and CV download
- `/contact` — email, affiliation, and research profiles

## Local development

```sh
npm install
npm run dev
```

Build the production site with:

```sh
npm run build
```

GitHub Actions deploys the static Astro output to [royyraa.github.io](https://royyraa.github.io) from the `main` branch.
