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
  pristine = null;
  static get styles() {
    return css`
      input { display: block; }
      .has-changed { border-color: red; }
    `;
  }
  constructor(turndownService = new TurndownService()){
    super();
    this.turndownService = turndownService;
    this.turndownService.use(turndownGfm.gfm);
  }
  handleModelChange(){
    const post = postsModel.get(this.blogId, this.postId);
    const content = this.turndownService.turndown(post.content);
    this.pristine = {title: post.title, content };
    if(!this.title){
      this.title = this.pristine.title;
    }
    if(!this.content){
      this.content = this.pristine.content;
    }
  }
  handleTitleChange(e){
    this.title = e.target.value;
  }
  handleContentChange(e){
    this.content = e.target.value;
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
    const className = this.hasChanged ? 'has-changed' : '';
    return html`
      <input
        class="${this.title !== this.pristine.title ? 'has-changed' : ''}"
        value="${this.title}"
        @change="${this.handleTitleChange}"/>
      <textarea
        class="${this.content !== this.pristine.content ? 'has-changed' : ''}"
        @change="${this.handleContentChange}">${this.content}</textarea>
    `;
  }
}
