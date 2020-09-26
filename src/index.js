const {Router} = window.Vaadin;

class ListView extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `hello world`;
  }
}
customElements.define('x-list-view', ListView);

const router = new Router(document.querySelector('body'));
router.setRoutes([
  {path: '/agoseris/app/', component: 'x-list-view'}
]);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.min.js', {scope: '.'})
      .catch(console.log);
  });
}
