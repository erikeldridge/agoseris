class PostsModel extends EventTarget {
  _posts = ['post-a', 'post-b'];
  get posts(){
    return this._posts;
  }
  load(){
    this.dispatchEvent(new Event('change'));
  }
}

export const postsModel = new PostsModel();

