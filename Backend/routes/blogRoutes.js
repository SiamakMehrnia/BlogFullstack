import express from "express";
import {
  getPosts,
  getPostByID,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/blog.js";

const blogRouter = express.Router();

blogRouter.route("/").get(getPosts).post(createPost);
blogRouter.route("/:id").get(getPostByID).put(updatePost).delete(deletePost);

export default blogRouter;
