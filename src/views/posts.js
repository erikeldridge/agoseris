import {customElement, html, LitElement, property} from 'lit-element';
import {postsModel} from '../models/posts.js';

@customElement('x-posts')
export class PostsView extends LitElement {
  @property({type:String})
  blog = null;
  @property({type:Array})
  posts =[]
  handleModelChange(){
    this.posts = postsModel.list(this.blog);
  }
  connectedCallback(){
    super.connectedCallback();
    postsModel.addEventListener('change', this.handleModelChange.bind(this));
    postsModel.load();
  }
  disconnectedCallback(){
    postsModel.removeEventListener('change', this.handleModelChange.bind(this));
    super.disconnectedCallback();
  }
  render(){
    return html`<ul>${
      this.posts.map((post,id) => html`<li><a href="./${this.blog}/${id}">${post}</a></li>`)
    }</ul>`;
  }
}
