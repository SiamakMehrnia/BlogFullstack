import pool from "../db/server.js";
import ErrorResponse from "../utils/ErrorResponse.js";

const getPosts = async (req, res, next) => {
  try {
    const results = await pool.query("SELECT * FROM posts");
    res.status(200).json(results.rows);
  } catch (error) {
    next(error);
  }
};

const getPostByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await pool.query("SELECT * FROM posts WHERE id=$1", [id]);
    if (results.rows.length === 0)
      throw new ErrorResponse("Post not found.", 404);
    res.status(200).json(results.rows);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { title, author, content, cover } = req.body;
    const results = await pool.query(
      "INSERT INTO posts (title, author, content, cover) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, author, content, cover]
    );
    res.status(201).json(results.rows[0]);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, content, cover } = req.body;

    const results = await pool.query(
      "UPDATE posts SET title=$1, author=$2, content=$3, cover=$4 WHERE id=$5 RETURNING *",
      [title, author, content, cover, id]
    );
    if (results.rows.length === 0)
      throw new ErrorResponse("Post not found.", 404);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await pool.query(
      "DELETE FROM posts WHERE id=$1 RETURNING *",
      [id]
    );
    if (results.rows.length === 0)
      throw new ErrorResponse("Post not found.", 404);
    res.status(200).json({ message: `Post was deleted.` });
  } catch (error) {
    next(error);
  }
};

export { getPosts, getPostByID, createPost, updatePost, deletePost };
