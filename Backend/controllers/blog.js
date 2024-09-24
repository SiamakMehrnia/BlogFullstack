import pool from "../db/server.js";

const getPosts = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM posts");
    res.status(200).json(results.rows);
  } catch {
    res.status(500).json({ message: `Error fetching posts: ${error}` });
  }
};

const getPostByID = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await pool.query("SELECT * FROM posts WHERE id=$1", [id]);
    res.status(200).json(results.rows);
  } catch {
    res.status(500).json({ message: `Error fetching posts: ${error}` });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, author, content, cover } = req.body;

    const results = await pool.query(
      "INSERT INTO posts (title, author, content, cover) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, author, content, cover]
    );
    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(500).json({ message: `Error creating posts: ${error}` });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, content, cover } = req.body;

    const results = await pool.query(
      "UPDATE posts SET title=$1, author=$2, content=$3, cover=$4 WHERE id=$5 RETURNING *",
      [title, author, content, cover, id]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error fetching post by id ${id}: ${error}` });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const results = await pool.query(
      "DELETE FROM posts WHERE id=$1 RETURNING *",
      [id]
    );
    res.status(200).json({ message: `Post with the id ${id} was deleted.` });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error deleting post by id ${id}: ${error}` });
  }
};

export { getPosts, getPostByID, createPost, updatePost, deletePost };
