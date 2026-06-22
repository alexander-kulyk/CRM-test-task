# CRM Test Task

A small CRM single-page application built with React 19, TypeScript and Vite. It features a
persistent event calendar, an analytics dashboard, and a users directory, organized with a
Feature-Sliced Design architecture.

**🔗 Live demo: [alexander-kulyk.github.io/CRM-test-task](https://alexander-kulyk.github.io/CRM-test-task/)**

---

## Tech stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| UI             | React 19 (functional components)                    |
| Language       | TypeScript                                          |
| Build tool     | Vite                                                |
| Routing        | react-router v7                                      |
| Styling        | styled-components + `ThemeProvider` (typed theme)   |
| Forms          | react-hook-form + zod                               |
| Calendar       | FullCalendar                                        |
| Data grid      | MUI X DataGrid                                       |
| Charts         | Recharts                                            |
| Date pickers   | MUI X Date Pickers + Day.js                         |
| Persistence    | Dexie (IndexedDB)                                   |

There is no backend — all data lives in the browser. Calendar events are persisted in
IndexedDB; analytics and users use mock data.

---

## Getting started

### Prerequisites

- **Node.js** 20.19+ (or 22.12+) — required by Vite 8
- **npm** (ships with Node)

### Install & run locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (Vite, with HMR)
npm run dev
```

The dev server prints a local URL (default <http://localhost:5173>). Open it in your browser.

### Available scripts

| Command           | Description                                            |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot module replacement |
| `npm run build`   | Type-check (`tsc -b`) and build for production         |
| `npm run preview` | Preview the production build locally                   |
| `npm run lint`    | Run ESLint over the project                            |
| `npm run deploy`  | Build and publish `dist/` to GitHub Pages              |

> There is no test runner configured. Verify changes with `npm run build` and `npm run lint`.

---

## Architecture

The codebase follows **Feature-Sliced Design (FSD)** with four active layers. Modules may only
import from layers strictly below them — never sideways within a layer, never upward.

```
app  →  pages  →  features  →  shared
```

- **`app`** — app-wide infrastructure: root composition ([App.tsx](src/app/App.tsx)),
  providers, router, and global styles/theme.
- **`pages`** — route targets that compose features and shared UI; kept thin.
- **`features`** — reusable business capabilities that own their UI, model, and logic.
- **`shared`** — project-agnostic reusable UI, context, and utilities. Cannot import from
  higher layers.

### Import direction & public API

- `app` may import from `pages`, `features`, `shared`.
- `pages` may import from `features`, `shared`.
- `features` may import from `shared`.
- `shared` imports from nothing above it.

Cross-slice imports inside the same layer are forbidden — page slices never import other page
slices, and feature slices never import other feature slices. Every slice and shared segment
exposes its public surface through an `index.ts` barrel; consumers import from the barrel, not
from internals. Imports are relative (no path alias).

### Segments

Inside a slice, code is grouped by technical purpose: `ui` (components + co-located
`styled.ts`), `model` (state, hooks, schemas, repositories), `api` (data access), `lib`
(slice-local helpers), and `config` (constants).

### Current structure

```
src/
├── app/                      # App composition, providers, router, styles/theme
├── pages/
│   ├── CalendarPage/         # default route "/"
│   ├── AnalyticsPage/        # "/analytics"
│   └── UsersPage/            # "/users"
├── features/
│   └── calendar/             # FullCalendar + Dexie persistence + RHF/zod event form
│       ├── ui/               # CalendarView, EventModal, loaders
│       ├── model/            # hooks, form schema, types
│       ├── api/              # Dexie database + repository
│       ├── lib/              # mappers
│       └── config/           # FullCalendar config, constants
└── shared/
    ├── ui/                   # AppLayout, Confirmation, Input, pickers, Error* UI, Page primitives
    └── context/              # ErrorContext (global error state)
```

### Routing

Routes are defined in [AppRouter.tsx](src/app/router/AppRouter.tsx). All pages render inside a
persistent `AppLayout` (sidebar + `<Outlet/>`). **Calendar is the default (index) route**;
unknown paths redirect to it.

```
/           → CalendarPage   (default)
/analytics  → AnalyticsPage
/users      → UsersPage
*           → redirect to /
```

### Error handling

Render crashes are caught by an `ErrorBoundary` that reports the error into a global
`ErrorContext` instead of rendering its own UI. A single global `ErrorMessage` overlay
(mounted in `App`, outside the boundary) displays both operational errors and caught crashes.
Dismissing an error removes it from the shared state.

### Styling

Theme tokens (colors, spacing, radii, typography) live in
[theme.ts](src/app/styles/theme.ts) and are used through `ThemeProvider`. Component styles live
in co-located `styled.ts` files and are imported as `import * as S from './styled'`.

---

## Business functionality

### 📅 Calendar (default page)

An interactive scheduling board built on FullCalendar with month, week, and day views.

- Click a day/time slot to create an event, or click an existing event to edit it.
- The event form captures **title, date, start time, end time, and color**, validated with
  react-hook-form + zod.
- Drag-and-drop to reschedule an event.
- **Deleting an event requires confirmation** via a reusable `Confirmation` dialog
  ("The event will be deleted." / "Are you sure you want to continue?").
- Events are **persisted in IndexedDB** through a Dexie repository, so they survive page
  reloads. The UI updates reactively via live queries.

### 📊 Analytics

An event-analytics dashboard (mock data):

- A Recharts composed chart showing **attendees (bars)** and **number of events (line)** per
  month.
- A breakdown table of events with registrations, attendees, and status badges
  (Completed / Upcoming / Cancelled).

### 👥 Users

A users directory (mock data) rendered with the MUI X **DataGrid**, including pagination. The
table has the columns **Name, Second name, Email, Phone number** and is populated with 10
sample users.

---

## Deployment

The app is deployed to **GitHub Pages**: <https://alexander-kulyk.github.io/CRM-test-task/>

Because the site is served from a subpath, Vite is configured with `base: '/CRM-test-task/'`
and the router derives its `basename` from `import.meta.env.BASE_URL`. A `404.html` SPA
fallback is generated on build so client-side routes resolve correctly.

To publish a new build:

```bash
npm run deploy
```

This runs the production build and pushes `dist/` to the `gh-pages` branch via the `gh-pages`
package.
