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
    'posts': new Route('/agoseris/app/:blog'),
    'post': new Route('/agoseris/app/:blog/:post')
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
    // Pipes events into LitElement's lifecycle.
    installRouter(this.handleRouteChange.bind(this));
    authModel.addEventListener('change', this.handleAuthChange.bind(this));
  }
  disconnectedCallback(){
    authModel.removeEventListener('change', this.handleAuthChange.bind(this));
    super.disconnectedCallback();
  }
  render(){
    if(!this.isLoggedIn){
      return html`
        <x-logged-out></x-logged-out>
      `;
    }
    switch(this.currentRoute.name){
      case 'blogs':
        return html`
          <x-blogs></x-blogs>
        `;
      case 'posts':
        return html`
          <x-posts blog="${this.currentRoute.params.blog}">
          </x-posts>
        `;
      case 'post':
        return html`
          <x-post
            blog-id="${this.currentRoute.params.blog}"
            post-id="${this.currentRoute.params.post}">
          </x-post>
        `;
    }
  }
}
