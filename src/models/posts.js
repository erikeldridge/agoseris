class PostsModel extends EventTarget {
  _posts = {
    'blog-a': ['<h1>b-a-post-a</h1>', '<h1>b-a-post-b</h1>'],
    'blog-b': ['b-b-post-a', 'b-b-post-b']
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

