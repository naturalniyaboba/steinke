import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

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
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error('Failed to render app:', error);
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; text-align: center;">
      <h1>Ошибка загрузки</h1>
      <p>Не удалось загрузить приложение. Пожалуйста, обновите страницу.</p>
      <p style="color: #666; font-size: 12px; margin-top: 10px;">${String(error)}</p>
    </div>
  `;
}
