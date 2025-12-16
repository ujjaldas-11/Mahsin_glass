# Ahsin Tempered Glass — Frontend

Small React frontend for browsing tempered glass products and models. Uses a local data.json file for product/groups and provides search and details UI.

## Features
- Responsive gallery/grid layout (Tailwind CSS)
- Search models by name (instant filtered results)
- Details page for each item (via react-router)
- Lightweight, file-based demo data (`data.json`)

## Tech stack
- React (Vite / Create React App — adjust commands below to your setup)
- Tailwind CSS
- react-router-dom
- lucide-react (icons)
- Plain JSON data source (`data.json`)

## Quick start (Linux)
1. Open terminal at the frontend folder:
   cd /home/ujjaldas/Desktop/React-Js/Ahsin_temperedGlass/frontend

2. Install dependencies:
   npm install

3. Run dev server:
   npm start
   or (if Vite)
   npm run dev

4. Build for production:
   npm run build

## Project structure (important files)
- src/
  - components/
    - Navbar/ — search + quick result card list
    - Card/ — group/model card UI
  - Pages/
    - Gallery/ — grid of items
    - Details/ — item detail page (uses useParams)
  - data.json — demo data (items/groups/models)
  - index.css — global / Tailwind styles
  - main.jsx / App.jsx — routing + root

## Usage notes
- Ensure `data.json` shape matches components (e.g. `data.items` and `group.models`).
- Search filters groups by model name; results count is shown in the Navbar.
- Gallery layout uses a 2-column grid with last item spanning full width (see CSS / Tailwind classes).

## Troubleshooting
- Nothing displays? Check browser console and terminal for runtime errors.
- If `data.items` is undefined, components will fail — add guards like `data?.items?.map`.
- Tailwind classes: fix typos like `sm:grid-col-1` → `sm:grid-cols-1`.

## Contributing
- Open a PR with small focused changes.
- Keep components modular and add unit tests where helpful.

## License
MIT
