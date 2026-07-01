import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './index.css';

// vite-react-ssg owns mount/hydration: it renders each route to static HTML at
// build time and hydrates on the client. basename comes from Vite's base so the
// router matches whether the site is served from the apex (production handover)
// or the GitHub Pages project subpath (preview).
export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
});
