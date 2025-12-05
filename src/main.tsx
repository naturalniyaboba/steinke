import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages SPA redirect handler
// This code handles the redirect from 404.html to index.html
// and restores the original path for React Router
// Адаптировано из: https://github.com/rafgraph/spa-github-pages
(function() {
  const pathSegmentsToKeep = 1; // Keep /steinke/ segment
  const base = '/steinke/';
  
  // Check if we're coming from a 404 redirect (URL contains ?/)
  const search = window.location.search;
  if (search.includes('?/')) {
    // Extract the path from the query string
    const pathAndQuery = search.slice(2).split('#');
    const pathPart = pathAndQuery[0];
    const hash = pathAndQuery[1] || '';
    
    // Split path and query parameters
    const parts = pathPart.split('&');
    const path = parts[0].replace(/~and~/g, '&');
    const queryParams = parts.slice(1).map(p => p.replace(/~and~/g, '&')).join('&');
    
    // Reconstruct the URL
    const newPath = base + path;
    const newSearch = queryParams ? '?' + queryParams : '';
    
    // Replace the current URL without reload
    window.history.replaceState(null, '', newPath + newSearch + (hash ? '#' + hash : ''));
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
