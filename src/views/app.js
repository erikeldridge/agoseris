import {customElement, html, LitElement, property} from 'lit-element';
import { authModel } from '../models/auth.js';
import { installRouter } from 'pwa-helpers/router.js';
import Route from 'route-parser';

@customElement('x-app')
export class App extends LitElement {
  @property({type:Boolean})
  isLoggedIn = false;
  @property({type:String})
  currentRoute = {name:'blogs'};
  routes = {
    'blogs': new Route('/agoseris/app/'),
    'posts': new Route('/agoseris/app/:blog')
  }
  firstUpdated() {
    installRouter(this.handleRouteChange.bind(this));
  }
  handleRouteChange({pathname}){
    for (let name in this.routes) {
      const params = this.routes[name].match(pathname);
      if (params) {
        this.currentRoute = {name, params};
        break;
      }
    }
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
    return !(this.currentRoute.name === 'blogs' && this.isLoggedIn);
  }
  arePostsHidden(){
    return !(this.currentRoute.name === 'posts' && this.isLoggedIn);
  }
  render(){
    return html`
      <x-auth></x-auth>
      <x-blogs ?hidden=${this.isListHidden()} ></x-blogs>
      <x-posts ?hidden=${this.arePostsHidden()}
        blog="${this.currentRoute.params?.blog}"></x-posts>
    `;
  }
}
