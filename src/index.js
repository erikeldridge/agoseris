if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.min.js', {scope: '.'})
      .then((reg) => {
        console.log('Service worker registered.', reg);
      });
  });
}
