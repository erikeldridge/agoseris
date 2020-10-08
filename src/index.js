import {customElement, html, LitElement, property} from 'lit-element';
import { installRouter } from 'pwa-helpers/router.js';

class AuthModel extends EventTarget {
  _token = null;
  set token(token){
    this._token = token;
    this.dispatchEvent(new Event('change'));
  }
  get token(){
    return this._token;
  }
}

const authModel = new AuthModel();

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
  @property({type:Boolean})
  isLoggedIn = false;
  handleClick(){
    // Updates app state.
    if (authModel.token) {
      authModel.token = null;
    } else {
      authModel.token = 'asd';
    }
    // Updates view state.
    this.isLoggedIn = !!authModel.token;
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
  @property({type:Boolean})
  isLoggedIn = false;
  @property({type:String})
  currentPath = location.pathname;
  firstUpdated() {
    installRouter(this.handleRouteChange.bind(this));
  }
  handleRouteChange({pathname}){
    this.currentPath = pathname;
  }
  handleAuthChange(){
    this.isLoggedIn = !!authModel.token;
  }
  connectedCallback(){
    super.connectedCallback();
    authModel.addEventListener('change', this.handleAuthChange.bind(this));
  }
  disconnectedCallback(){
    authModel.removeEventListener('change', this.handleAuthChange.bind(this));
    super.disconnectedCallback();
  }
  isListHidden(){
    return !(this.currentPath === '/agoseris/app/' && this.isLoggedIn);
  }
  render(){
    return html`
      <x-auth></x-auth>
      <x-list ?hidden=${this.isListHidden()} ></x-list>
    `;
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.min.js', {scope: '.'})
      .catch(console.log);
  });
}
