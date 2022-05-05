'use strict';
const pool = require('../database/db');
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
    const [rows] = await promisePool.query(`INSERT INTO Posts(PostId, PostText, PostImage, Category, CreatedById, PostComment, PostLike, PostDate) VALUES  (?,?,?,?,?,?,?,?)`,
        [null, post.PostText, post.filename, post.Category, post.CreatedById, null, 1, post.PostDate]);
     //   [post.PostText, post.PostImage, post.Category, post.CreatedById]);
    console.log(`Post model insert`, rows, rows[0]);
    return rows.insertId;
  } catch (e) {
    console.error('Post model createPost error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};
/*
const createPost = async (post, res) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO Posts(PostText, PostImage, Category, CreatedById) VALUES (?,?,?,?)`,
        [post.PostText, post.PostImage, post.Category, post.CreatedById]);
    console.log(`Post model insert`, rows, rows[0]);
    return rows.insertId;
  } catch (e) {
    console.error('Post model createGymMove error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

 */

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

const postLiked = async (postId, res) => {
  try {
    const [rows] = await promisePool.query('UPDATE Posts SET PostLike = PostLike+1 WHERE PostId = ?', [postId]);
    console.log(`PostModel liked a post`, rows,);
    return rows.affectedRows === 1;
  } catch (e) {
    console.error('Post model postLiked error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

const getPostsByCategoryName = async (category, res) => {
  try {
    const [rows] = await promisePool.query('SELECT CategoryName FROM Category RIGHT JOIN Posts ON Category.CategoryId = Posts.Category WHERE Posts.PostId = ?', [category]);
    return rows[0];
  } catch (e) {
    console.error('Post model getPostsCategoryName error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

const getPostsCreatorName = async (userId, res) => {
  try {
    const [rows] = await promisePool.query('SELECT UserName FROM Users RIGHT JOIN Posts ON Users.UserId = Posts.CreatedById WHERE Posts.PostId = ?', [userId]);
    return rows[0];
  } catch (e) {
    console.error('Post model getPostsCreatorName error', e.message);
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
  postLiked,
  getPostsByCategoryName,
  getPostsCreatorName,
};