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
try {
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
} catch (error) {
  console.error('Failed to render app:', error);
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: sans-serif; text-align: center; min-height: 100vh; display: flex; flex-direction: column; justify-content: center;">
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Ошибка загрузки</h1>
        <p style="margin-bottom: 1rem;">Не удалось загрузить приложение. Пожалуйста, обновите страницу.</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; font-size: 1rem; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 0 auto;">
          Обновить страницу
        </button>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">${String(error)}</p>
      </div>
    `;
  }
}
