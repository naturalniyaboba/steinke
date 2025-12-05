import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages SPA redirect handler - только для обработки редиректов из 404.html
const search = window.location.search;
if (search && search.startsWith('?/')) {
  const base = '/steinke/';
  try {
    const queryPart = search.slice(2);
    const hashIndex = queryPart.indexOf('#');
    const queryWithoutHash = hashIndex >= 0 ? queryPart.slice(0, hashIndex) : queryPart;
    const hash = hashIndex >= 0 ? queryPart.slice(hashIndex) : '';
    
    const parts = queryWithoutHash.split('&');
    const path = parts[0] ? parts[0].replace(/~and~/g, '&') : '';
    const queryParams = parts.slice(1).filter(p => p).map(p => p.replace(/~and~/g, '&')).join('&');
    
    const newPath = base + (path || '');
    const newSearch = queryParams ? '?' + queryParams : '';
    
    window.history.replaceState(null, '', newPath + newSearch + hash);
  } catch (e) {
    console.error('Error processing redirect:', e);
  }
}

// Render the app
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('Root element not found!');
} else {
  createRoot(rootElement).render(<App />);
}
