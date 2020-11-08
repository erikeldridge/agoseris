import {customElement, html, LitElement, property} from 'lit-element';
import { authModel } from '../models/auth.js';

@customElement('x-logged-out')
class LoggedOutView extends LitElement {
  handleClick(){
    authModel.token = 'asd';
  }
  render(){
    return html`
    <button @click="${this.handleClick}">log in</button>
    `;
  }
}
