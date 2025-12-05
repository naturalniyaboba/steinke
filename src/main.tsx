import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages SPA redirect handler
// This code handles the redirect from 404.html to index.html
// and restores the original path for React Router
(function() {
  try {
    const base = '/steinke/';
    const search = window.location.search;
    
    // Only process if we have a redirect query parameter
    if (search && search.startsWith('?/')) {
      try {
        // Extract the path from the query string
        const queryPart = search.slice(2); // Remove '?/'
        const hashIndex = queryPart.indexOf('#');
        const queryWithoutHash = hashIndex >= 0 ? queryPart.slice(0, hashIndex) : queryPart;
        const hash = hashIndex >= 0 ? queryPart.slice(hashIndex) : '';
        
        // Split path and query parameters
        const parts = queryWithoutHash.split('&');
        const path = parts[0] ? parts[0].replace(/~and~/g, '&') : '';
        const queryParams = parts.slice(1).filter(p => p).map(p => p.replace(/~and~/g, '&')).join('&');
        
        // Reconstruct the URL
        const newPath = base + (path || '');
        const newSearch = queryParams ? '?' + queryParams : '';
        
        // Replace the current URL without reload
        window.history.replaceState(null, '', newPath + newSearch + hash);
      } catch (e) {
        console.error('Error processing 404 redirect:', e);
      }
    }
  } catch (e) {
    console.error('Error in redirect handler:', e);
  }
})();

// Render the app
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error('Root element not found!');
  document.body.innerHTML = '<div style="padding: 20px; font-family: sans-serif; text-align: center;"><h1>Ошибка загрузки</h1><p>Не удалось найти корневой элемент. Пожалуйста, обновите страницу.</p></div>';
}
