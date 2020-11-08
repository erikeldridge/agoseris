class PostsModel extends EventTarget {
  _posts = {
    'blog-a': [
      {title:'b-a-post-a', content:'<h1>Post A</h1>'},
      {title:'b-a-post-b', content:'<h1>Post B</h1>'}
    ],
    'blog-b': [
      {title:'b-b-post-a', content:'<h1>Post A</h1>'},
      {title:'b-b-post-b', content:'<h1>Post B</h1>'}
    ]
  }
  list(blog){
    return this._posts[blog] || [];
  }
  get(blog, id){
    return this._posts[blog]?.[id];
  }
  load(){
    this.dispatchEvent(new Event('change'));
  }
}

export const postsModel = new PostsModel();

