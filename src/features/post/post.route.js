import express from "express";
import jwtAuth from "../../middlewares/jwtAuth.middleware.js";
import PostController from "./post.controller.js";

const postRouter = express.Router();
const postController = new PostController();

postRouter.get("/all", jwtAuth, postController.getPosts);

export { postRouter };
