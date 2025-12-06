import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Обработка редиректов из 404.html для GitHub Pages SPA
try {
  const search = window.location.search;
  if (search && search.startsWith('?/')) {
    const base = '/steinke/';
    const queryPart = search.slice(2);
    const hashIndex = queryPart.indexOf('#');
    const path = hashIndex >= 0 ? queryPart.slice(0, hashIndex) : queryPart;
    const hash = hashIndex >= 0 ? queryPart.slice(hashIndex) : '';
    const cleanPath = path.split('&')[0].replace(/~and~/g, '&');
    window.history.replaceState(null, '', base + cleanPath + hash);
  }
} catch (e) {
  console.error('Redirect error:', e);
}

// Рендеринг приложения
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
