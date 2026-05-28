# Saya School Website (SEO-First)

This is a Next.js App Router project configured for static export (`out/`) and can be
deployed to either Hostinger shared hosting or GitHub Pages.

## Prepare repository for GitHub

1. Create a new repository on GitHub.
2. Push this project to the repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3. In GitHub, open **Settings → Pages** and set:
   - **Source**: `GitHub Actions`
4. Keep the default branch as `main` (the workflow deploys from pushes to `main`).

## Local development

```bash
npm install
npm run dev
```

## Build for Hostinger

```bash
npm run build
```

This generates the static website in the `out/` folder.

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml` which automatically:

- installs dependencies
- builds the Next.js static export
- uploads `out/` as a Pages artifact
- deploys to GitHub Pages

### Notes

- For project pages (`https://<user>.github.io/<repo>/`), `basePath` and asset prefix
  are auto-configured during GitHub Actions builds.
- For user/org pages (`https://<user>.github.io/`), no `basePath` is applied.
- After the first successful workflow run, your Pages URL appears in the workflow
  output and in **Settings → Pages**.

## Deploy to Hostinger shared hosting

1. In Hostinger hPanel, open **File Manager** for your domain.
2. Go to `public_html`.
3. Delete old website files (after backup).
4. Upload the full contents of local `out/` into `public_html`.
5. Confirm these files exist in `public_html`:
   - `.htaccess`
   - `robots.txt`
   - `sitemap.xml`
6. Visit your domain and test key pages:
   - `/`
   - `/about`
   - `/courses`
   - `/news`
   - `/contact`
   - `/donate`

## SEO checklist after go-live

1. Add your site property in [Google Search Console](https://search.google.com/search-console/about).
2. Verify ownership via DNS record (recommended).
3. Submit sitemap URL: `https://saya.edu.pk/sitemap.xml`.
4. Request indexing for home and major pages.
5. Add GA4 tracking in layout when measurement ID is ready.
6. Monitor performance and indexing weekly.

## Implemented SEO features

- Route-level metadata (title, description, canonical, Open Graph).
- `robots.txt` and generated `sitemap.xml`.
- JSON-LD structured data for organization and articles.
- Static, crawlable routes with clean internal linking.
- 404 page and Hostinger-compatible rewrite rules.
