'use strict';
const pool = require('../Database/db');
const promisePool = pool.promise();

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

//Lisätty
const getRecentPosts = async (res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM Posts ORDER BY PostId DESC LIMIT 2');
    return rows;
  } catch (e) {
    console.error('Post model getRecentPosts error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

//Lisätty
const getPostsByCategory = async (category, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM Posts WHERE Category = ?', [category]);
    return rows;
  } catch (e) {
    console.error('Post model getPostsByCategory error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

//Lisätty
const getPostsCreatedByUser = async (userId, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM Posts WHERE CreatedById = ?', [userId]);
    return rows;
  } catch (e) {
    console.error('Post model getPostsCreatedByUser error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

module.exports = {
  getAllPosts,
  getPostbyId,
  createPost,
  deletePost,
  getRecentPosts,
  getPostsByCategory,
  getPostsCreatedByUser,
};