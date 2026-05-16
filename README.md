# BlackOut Trades — Landing Page

Marketing site for [BlackOut Trades](https://blackouttrades.com): promotes the Discord community and Whop memberships.

## Stack

- **Vite** + **React** + **TypeScript**
- **Express** serves the production build (`dist/`)
- **Docker** + **Railway** for deployment

## Quick start

```bash
cd blackout-trades-site
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Typecheck + production build → `dist/` |
| `npm run preview` | Serve `dist/` locally (like production) |
| `npm start` | Run production server (requires `npm run build` first) |

## Edit content & links

All copy and URLs live in one file:

**`src/config/site.ts`**

| Field | Purpose |
|-------|---------|
| `discordInvite` | Discord invite URL |
| `whopUrl` | Whop store URL |
| `tagline`, `description`, `features`, `faq` | Page copy |
| `contactEmail`, `social` | Optional footer / links |

Logo: replace **`public/logo.png`** (or change `logo` in `site.ts`).

## Project layout

```
blackout-trades-site/
├── public/logo.png      # Brand image
├── src/
│   ├── App.tsx          # Page structure
│   ├── App.css          # Styles
│   ├── config/site.ts   # Content & links
│   └── main.tsx
├── server/prod.mjs      # Static file server + /healthz
├── Dockerfile
├── railway.json
└── package.json
```

## Deploy to Railway

1. Push this repo to GitHub.
2. In [Railway](https://railway.app): **New Project** → **Deploy from GitHub repo**.
3. Railway uses the **Dockerfile** automatically (see `railway.json`).
4. **Settings → Networking → Generate Domain** for a `*.up.railway.app` URL.
5. Add custom domain `blackouttrades.com` and point DNS (CNAME) as Railway instructs.

No environment variables are required for the landing page. Railway sets `PORT`; the server listens on that port.

Health check: `GET /healthz` → `ok`

## Production build (local test)

```bash
npm run build
npm start
```

Default: [http://localhost:8080](http://localhost:8080) (or whatever `PORT` is set to).

## Links (current)

- Discord: https://discord.gg/2SJN9jx8S
- Whop: https://whop.com/blackout-2d9c/

## Disclaimer

Site copy includes a non–financial-advice disclaimer in the footer. Update FAQ and legal text in `site.ts` to match your offering.
