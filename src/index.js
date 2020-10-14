// Defines custom elements.
import './views/app.js';
import './views/auth.js';
import './views/blogs.js';
import './views/posts.js';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.min.js', {scope: '.'})
      .catch(console.log);
  });
}
