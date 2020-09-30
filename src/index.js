import {Router} from '@vaadin/router';
import {customElement, html, LitElement, property} from 'lit-element';

@customElement('x-list-view')
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
