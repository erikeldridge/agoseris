class PostsModel extends EventTarget {
  _posts = {
    'blog-a': ['b-a-post-a', 'b-a-post-b'],
    'blog-b': ['b-b-post-a', 'b-b-post-b']
  }
  list(blog){
    return this._posts[blog] || [];
  }
  load(){
    this.dispatchEvent(new Event('change'));
  }
}

export const postsModel = new PostsModel();

