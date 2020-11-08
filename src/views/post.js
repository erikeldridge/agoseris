import {css, customElement, html, LitElement, property} from 'lit-element';
import TurndownService from 'turndown';
import * as turndownGfm from 'turndown-plugin-gfm';
import {postsModel} from '../models/posts.js';

@customElement('x-post')
export class PostView extends LitElement {
  @property({type:String, attribute:'blog-id'})
  blogId = null;
  @property({type:Number, attribute:'post-id'})
  postId = null;
  @property({type:String})
  title = null;
  @property({type:String})
  content = null;
  static get styles() {
    return css`
      input { display: block; }
    `;
  }
  constructor(turndownService = new TurndownService()){
    super();
    this.turndownService = turndownService;
    this.turndownService.use(turndownGfm.gfm);
  }
  handleModelChange(){
    const post = postsModel.get(this.blogId, this.postId);
    this.title = post.title;
    this.content = this.turndownService.turndown(post.content);
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
    return html`
      <input value="${this.title}"/>
      <textarea>${this.content}</textarea>
    `;
  }
}
