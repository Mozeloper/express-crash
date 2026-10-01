import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postController.js";

const router = express.Router();

// GET ALL POSTS
router.get("/", getPosts);

// GET SINGLE POST
router.get("/:id", getPost);

// CREATE NEW POST
router.post("/", createPost);

// UPDATE A POST
router.put("/:id", updatePost);

// DELETE A POST
router.delete("/:id", deletePost);

export default router;
