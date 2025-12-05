import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, '..', 'dist');
const indexPath = join(distPath, 'index.html');
const notFoundPath = join(distPath, '404.html');

try {
  // Читаем index.html
  let htmlContent = readFileSync(indexPath, 'utf-8');
  
  // Добавляем скрипт для обработки 404 ошибок GitHub Pages
  // Адаптировано из: https://github.com/rafgraph/spa-github-pages
  // Этот скрипт будет работать только в 404.html, не в index.html
  const redirectScript = `
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      (function() {
        try {
          var base = '/steinke/';
          var l = window.location;
          var pathname = l.pathname;
          
          // Only redirect if we're actually on 404.html page (not index.html)
          // This script is only in 404.html, so if we're here, we need to redirect
          if (pathname.includes('404.html') || (!pathname.includes('index.html') && pathname !== base && pathname !== base.slice(0, -1))) {
            var pathSegmentsToKeep = 1; // Keep /steinke/ segment
            var pathToRedirect = pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~');
            if (!pathToRedirect) pathToRedirect = '';
            
            var redirect = l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
              base + '?/' + pathToRedirect +
              (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
              l.hash;
            
            // Only redirect if we're not already on the correct page
            if (l.href !== redirect) {
              l.replace(redirect);
            }
          }
        } catch (e) {
          console.error('404 redirect error:', e);
        }
      })();
    </script>`;
  
  // Вставляем скрипт в начало <head>, чтобы он выполнился как можно раньше
  htmlContent = htmlContent.replace('<head>', '<head>' + redirectScript);
  
  // Записываем в 404.html
  writeFileSync(notFoundPath, htmlContent, 'utf-8');
  console.log('✓ Created 404.html with SPA redirect handler');
} catch (error) {
  console.error('Error creating 404.html:', error);
  process.exit(1);
}

