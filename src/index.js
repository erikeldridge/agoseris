import {Router} from '@vaadin/router';
import {html, render} from 'lit-html';

class ListView extends HTMLElement {
  constructor(){
    super();
    this.template = html`<ul>${this.genItems()}</ul>`;
  }
  genItems(){
    return html`<li>a</li>`;
  }
  connectedCallback() {
    render(this.template, this);
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
