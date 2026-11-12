# tyalau studio

Sanity Studio for managing the content behind my portfolio site.

- Portfolio: [tyalau.github.io](https://tyalau.github.io)
- Frontend repo: [tyalau/tyalau.github.io](https://github.com/tyalau/tyalau.github.io)

## Content types

- **Site settings**: site-wide configuration
- **Project**: portfolio projects, with tech stack options
- **Experience**: work history
- **Education**: education history

Schemas live in [schemaTypes/](schemaTypes), and the desk structure is defined in [structure.ts](structure.ts).

## Getting started

Requires Node and pnpm; see `engines` in [package.json](package.json) for the supported versions.

```sh
pnpm install
cp .env.example .env   # fill in the Sanity project values
pnpm dev
```

| Variable                   | Description              |
| -------------------------- | ------------------------ |
| `SANITY_STUDIO_PROJECT_ID` | Sanity project ID        |
| `SANITY_STUDIO_DATASET`    | Dataset to connect to    |
| `SANITY_STUDIO_APP_ID`     | Studio deployment app ID |

## Scripts

| Script             | Description                 |
| ------------------ | --------------------------- |
| `pnpm dev`         | Start the Studio locally    |
| `pnpm build`       | Build the Studio            |
| `pnpm deploy`      | Deploy the Studio to Sanity |
| `pnpm lint`        | Lint with ESLint            |
| `pnpm check-types` | Type-check with TypeScript  |
| `pnpm format`      | Format with Prettier        |

Commits follow [Conventional Commits](https://www.conventionalcommits.org), enforced by commitlint and husky.
