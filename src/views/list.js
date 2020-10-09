import {customElement, html, LitElement, property} from 'lit-element';

@customElement('x-list')
export class ListView extends LitElement {
  @property()
  blogs =['a','b']
  render(){
    return html`<ul>${
      this.blogs.map(blog => html`<li>${blog}</li>`)
    }</ul>`;
  }
}
