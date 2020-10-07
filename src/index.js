import {customElement, html, LitElement, property} from 'lit-element';
import { installRouter } from 'pwa-helpers/router.js';

@customElement('x-list')
class ListView extends LitElement {
  @property()
  blogs =['a','b']
  render(){
    return html`<ul>${
      this.blogs.map(blog => html`<li>${blog}</li>`)
    }</ul>`;
  }
}

@customElement('x-auth')
class AuthView extends LitElement {
  @property()
  isLoggedIn = false;
  handleClick(){
    this.isLoggedIn = !this.isLoggedIn;
  }
  render(){
    return html`
    <button @click="${this.handleClick}">
      ${this.isLoggedIn?'logout':'login'}
    </button>
    `;
  }
}

@customElement('x-app')
class App extends LitElement {
  // Maps browser location to app state, so location changes trigger render.
  @property()
  currentPath = '/agoseris/app/';
  firstUpdated() {
    installRouter(({pathname}) => this.currentPath = pathname);
  }
  isListHidden(){
    return !(this.currentPath === '/agoseris/app/');
  }
  render(){
    return html`
      <x-list ?hidden=${this.isListHidden()} ></x-list>
      <x-auth></x-auth>
    `;
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.min.js', {scope: '.'})
      .catch(console.log);
  });
}
