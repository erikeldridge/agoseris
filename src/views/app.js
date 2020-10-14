import {customElement, html, LitElement, property} from 'lit-element';
import { authModel } from '../models/auth.js';
import { installRouter } from 'pwa-helpers/router.js';

@customElement('x-app')
export class App extends LitElement {
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
      <x-blogs ?hidden=${this.isListHidden()} ></x-blogs>
    `;
  }
}
