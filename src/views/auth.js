import {customElement, html, LitElement, property} from 'lit-element';
import { authModel } from '../models/auth.js';

@customElement('x-auth')
export class AuthView extends LitElement {
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
