# Shopping — Angular Product Review Demo

Legacy Angular 16 training project showing product cards, product details and a review form.

## Status
**Maintenance / learning project — not a production storefront.** Current products are loaded from static JSON files in `src/assets`. Review submissions update the displayed object **in memory only**; they do not persist after a reload, and no production backend, checkout, or user accounts are provided.

## Stack
Angular 16, TypeScript 5.0, RxJS 7, Bootstrap, Slick Carousel, JSON fixtures. Confirm versions in `package.json`.

## Run locally
Use a Node.js version compatible with Angular 16. From the repository root:

```bash
npm ci
npm start
```

Open http://localhost:4200/. To run unit tests: `npm test`; to build: `npm run build`.

`npm run server` starts a separate json-server on port 9000 using `db.json`, but the existing `ProductService` reads static assets, **not** that server.

## Security hold — dependency provenance
Two unverified ZIP files previously tracked under `node_modules/` were removed from the current branch without altering application source or package manifests. The old Git history retains them; do not retrieve or execute historical copies.

The repository still tracks dependency directories, and the broader dependency/provenance audit has **not** been completed. Do not treat this cleanup as proof of safety or release readiness. Review Git history, dependency integrity and clean-install tests in an isolated approved environment before publishing.

## Known limitations and maintenance priorities
1. Verify Angular 16-compatible Node and npm versions; run clean install, build and tests.
2. Keep `node_modules/` out of Git tracking (after confirming all files and backups). A .gitignore rule does not untrack already committed files.
3. Verify review submission, refresh behavior, and numeric star rating; choose explicit local persistence or backend API in a future phase.
4. Add form validation, accessible labels, loading/error/empty states, image alt text and keyboard support.
5. Make product selection and review forms predictable; add service/component tests and E2E smoke tests.
6. Audit dependencies and external URLs; update incrementally instead of blindly jumping major versions.
7. Add actual screenshots, licenses and a concise scope statement before featuring this project.

## Roadmap
- **Foundation:** baseline tests, clean dependency tracking, security review and lint/format conventions.
- **Demo-ready:** responsive layout, stable product/review interactions, accessible UI, documentation, CI build.
- **Optional expansion:** persistent reviews with a documented API, pagination/search and authenticated users.

No claim of production readiness is made. Do not commit secrets, personal customer data or generated dependency directories.
