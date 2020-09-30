import {Router} from '@vaadin/router';
import {html, render as renderToDom} from 'lit-html';

class ListView extends HTMLElement {
  blogs =['a','b']
  constructor(){
    super();
  }
  render(){
    const template = html`<ul>${
      this.blogs.map(blog => html`<li>${blog}</li>`)
    }</ul>`;
    renderToDom(template, this);
  }
  connectedCallback() {
    this.render();
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
