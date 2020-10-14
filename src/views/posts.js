import {customElement, html, LitElement, property} from 'lit-element';
import {postsModel} from '../models/posts.js';

@customElement('x-posts')
export class PostsView extends LitElement {
  @property({type:Array})
  posts =[]
  handleBlogsChange(){
    this.posts = postsModel.posts;
  }
  connectedCallback(){
    super.connectedCallback();
    postsModel.addEventListener('change', this.handleBlogsChange.bind(this));
    postsModel.load();
  }
  disconnectedCallback(){
    postsModel.removeEventListener('change', this.handleBlogsChange.bind(this));
    super.disconnectedCallback();
  }
  render(){
    return html`<ul>${
      this.posts.map(blog => html`<li>${blog}</li>`)
    }</ul>`;
  }
}
