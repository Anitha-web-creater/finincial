# Financial Portfolio Management (Minimal Angular Demo)

## What this contains
- Dashboard with responsive layout and simple SVG charts (no chart library).
- Portfolio form (Reactive Forms) with client-side validation and review-before-submit.
- Mock service using BehaviorSubject to simulate backend storage.
- HTTP interceptor example (mock header addition).
- Lazy-loaded module for portfolio details.
- Simple custom pipe and directive examples.

## Requirements (on your machine)
- Node.js and npm
- Angular CLI (install globally): `npm install -g @angular/cli`
- Recommended Angular version: 15+

## Setup & Run
1. From project root run:
   ```bash
   npm install
   ng serve
   ```
2. Open `http://localhost:4200/`.

## Notes
- This is a source-only minimal scaffold. If you already have an Angular workspace, copy `src/` contents into your workspace `src/`.
- No backend required — data is stored in a mock service (in-memory BehaviorSubject).
