# AFTHO Frontend

AFTHO is a business diagnostics website focused on tracing missed-revenue and opportunity leaks. The visual and UX authority for this project is [`design.md`](./design.md); repository operating rules live in [`AGENTS.md`](./AGENTS.md).

## Getting Started

Run the development server with pnpm:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the current homepage.

## Email delivery

The website request form and optional Revenue Leak Check sharing use the Gmail
API from server-only Next.js routes. Configure these variables locally in
`.env.local` and in the production host:

```text
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=
AFTHO_MAIL_FROM=
AFTHO_MAIL_TO=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

The Google refresh token must include the `gmail.send` scope. Do not prefix any
of these variables with `NEXT_PUBLIC_` and do not commit an environment file.

To test locally, run `pnpm dev`, open the site, submit the website request form,
and complete the Revenue Leak Check. Choosing `No thanks` keeps the results
private. Choosing `Yes, share results` asks for a name, business, and email,
then sends the complete result to `AFTHO_MAIL_TO`.

## Production rate limiting

The public form routes use Upstash Redis for durable rate limiting across Vercel
function instances. Connect an Upstash Redis database through the Vercel
Marketplace, then set `UPSTASH_REDIS_REST_URL` and
`UPSTASH_REDIS_REST_TOKEN` in the production environment.

Production requests fail closed when Redis is missing or unavailable. Local
development uses an in-memory fallback when neither Redis variable is set.

## Checks

```bash
pnpm lint
pnpm build
```

The production build includes linting, type checking, and route compilation.
