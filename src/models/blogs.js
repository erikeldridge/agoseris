class BlogsModel extends EventTarget {
  _blogs = ['blog-a', 'blog-b'];
  get blogs(){
    return this._blogs;
  }
  load(){
    this.dispatchEvent(new Event('change'));
  }
}

export const blogsModel = new BlogsModel();

