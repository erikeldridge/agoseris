if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.min.js', {scope: '.'})
      .catch(console.log);
  });
}
