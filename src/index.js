import {Router} from '@vaadin/router';
import {LitElement, html, property} from 'lit-element';

class ListView extends LitElement {
  @property()
  blogs =['a','b']
  constructor(){
    super();
  }
  render(){
    return html`<ul>${
      this.blogs.map(blog => html`<li>${blog}</li>`)
    }</ul>`;
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
