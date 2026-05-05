import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './styles/global.css';
import App from './App.jsx';

const root = document.getElementById('root');

const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// react-snap pre-renders the page; hydrate if server-rendered HTML exists,
// otherwise do a normal client-side render.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
