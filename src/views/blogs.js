import {customElement, html, LitElement, property} from 'lit-element';
import {blogsModel} from '../models/blogs.js';

@customElement('x-blogs')
export class BlogsView extends LitElement {
  @property({type:Array})
  blogs =[]
  handleBlogsChange(){
    this.blogs = blogsModel.blogs;
  }
  connectedCallback(){
    super.connectedCallback();
    blogsModel.addEventListener('change', this.handleBlogsChange.bind(this));
    blogsModel.load();
  }
  disconnectedCallback(){
    blogsModel.removeEventListener('change', this.handleBlogsChange.bind(this));
    super.disconnectedCallback();
  }
  render(){
    return html`<ul>${
      this.blogs.map(blog => html`<li>${blog}</li>`)
    }</ul>`;
  }
}
