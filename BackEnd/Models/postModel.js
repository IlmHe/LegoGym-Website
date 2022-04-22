'use strict';
const pool = require('../Database/db');
const promisePool = pool.promise();

/**
 * Returns all posts from the database, else returns an error
 */
const getAllPosts = async (res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM Posts');
    return rows;
  } catch (e) {
    console.error('Posts model getAllPosts error', e.message);
    res.status(500).json({ message: "Something went wrong"});
    return;
  }
};

/**
 * Returns a post move by id, else returns an error
 */
const getPostbyId = async (id, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM Posts WHERE PostId = ?', [id]);
    return rows[0];
  } catch (e) {
    console.error('Post model getPostbyId error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

/**
 * Adds a post to the database, else returns an error
 */
const createPost = async (post, res) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO Posts(PostText, PostImage, Category, CreatedById, PostComment, PostLike) VALUES (?,?,?,?,?,?)`,
        [post.PostText, post.PostImage, post.Category, post.CreatedById, post.PostComment, post.PostLike]);
    console.log(`Post model insert`, rows, rows[0]);
    return rows.insertId;
  } catch (e) {
    console.error('Post model createGymMove error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

/**
 * Deletes a post from the database, else returns an error
 */
const deletePost = async (id, res) => {
  try {
    const [rows] = await promisePool.query('DELETE FROM Posts WHERE PostId = ?', [id]);
    console.log(`Post model delete`, rows,);
    return rows.affectedRows === 1;
  } catch (e) {
    console.error('Post model delete error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

module.exports = {
  getAllPosts,
  getPostbyId,
  createPost,
  deletePost,
};