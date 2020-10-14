import {customElement, html, LitElement, property} from 'lit-element';
import { authModel } from '../models/auth.js';
import { installRouter } from 'pwa-helpers/router.js';
import Route from 'route-parser';

@customElement('x-app')
export class App extends LitElement {
  @property({type:Boolean})
  isLoggedIn = false;
  @property({type:String})
  currentRoute = ['blogs'];
  routes = {
    'blogs': new Route('/agoseris/app/'),
    'posts': new Route('/agoseris/app/:blog')
  }
  firstUpdated() {
    installRouter(this.handleRouteChange.bind(this));
  }
  handleRouteChange({pathname}){
    this.currentRoute = Object.entries(this.routes).find(
      entry => entry[1].match(pathname));
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
    return !(this.currentRoute[0] === 'blogs' && this.isLoggedIn);
  }
  arePostsHidden(){
    return !(this.currentRoute[0] === 'posts' && this.isLoggedIn);
  }
  render(){
    return html`
      <x-auth></x-auth>
      <x-blogs ?hidden=${this.isListHidden()} ></x-blogs>
      <x-posts ?hidden=${this.arePostsHidden()}
        blog="${this.currentRoute[1] && this.currentRoute[1].blog}"></x-posts>
    `;
  }
}
