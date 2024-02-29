import PostModel from "./post.model.js";

class PostController {
  getPosts(req, res, next) {
    const products = PostModel.getAll();
    return res.status(200).send(products);
  }
}

export default PostController;
