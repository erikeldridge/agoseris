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
  firstUpdated() {
    installRouter(this.handleRouteChange.bind(this));
  }
  connectedCallback(){
    super.connectedCallback();
    authModel.addEventListener('change', this.handleAuthChange.bind(this));
  }
  disconnectedCallback(){
    authModel.removeEventListener('change', this.handleAuthChange.bind(this));
    super.disconnectedCallback();
  }
  areBlogsVisible(){
    return this.currentRoute.name === 'blogs' && this.isLoggedIn;
  }
  arePostsVisible(){
    return this.currentRoute.name === 'posts' && this.isLoggedIn;
  }
  isPostVisible(){
    return this.currentRoute.name === 'post' && this.isLoggedIn;
  }
  render(){
    let view;
    if(this.areBlogsVisible()){
      view = html`
        <x-blogs></x-blogs>
      `;
    }else if(this.arePostsVisible()){
      view = html`
        <x-posts blog="${this.currentRoute.params?.blog}">
        </x-posts>
      `;
    }else if(this.isPostVisible()){
      view = html`
        <x-post
          blog-id="${this.currentRoute.params?.blog}"
          post-id="${this.currentRoute.params?.post}">
        </x-post>
      `;
    }
    return html`
      <x-auth></x-auth>
      ${view}
    `;
  }
}
