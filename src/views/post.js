import {customElement, html, LitElement, property} from 'lit-element';
import {postsModel} from '../models/posts.js';

@customElement('x-post')
export class PostView extends LitElement {
  @property({type:String, attribute:'blog-id'})
  blogId = null;
  @property({type:Number, attribute:'post-id'})
  postId = null;
  @property({type:String})
  content = null;
  handleModelChange(){
    this.content = postsModel.get(this.blogId, this.postId);
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
    return html`<p>${this.content}</p>`;
  }
}
