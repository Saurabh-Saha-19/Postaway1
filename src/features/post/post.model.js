class PostModel {
  constructor(id, userId, caption, imageUrl) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static getAll() {
    return posts;
  }
}

let posts = [];
export default PostModel;
