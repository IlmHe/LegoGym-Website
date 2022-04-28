'use strict';

const postModel = require('../models/postModel');
const { validationResult } = require('express-validator');

/**
 * @description: This function is used to get all the posts
 * @param {object} req
 * @param {object} res
 * @returns {object} posts
 */
const post_list_get = async (req, res) => {
  const posts = await postModel.getAllPosts(res);
  res.json(posts);
};

/**
 * @description: This function is used to get a single post
 * @param {object} req
 * @param {object} res
 * @returns {object} post
 */
const post_get_by_id = async (req, res) => {
  console.log(`post controller get by id`, req.params.id);
  const post = await postModel.getPostbyId(req.params.id, res);
  console.log(`post get by id`, post);
  res.json(post || {});
};

/**
 * @description: This function is used to create a new post
 * @param {object} req
 * @param {object} res
 * @returns {object} post
 */
//Create a new post with image file
const post_post = async (req, res) => {
  console.log(`post controller post body`, req.body);
  if (!req.file) {
    return res.status(400).json({message: ` post upload failed: file invalid`});
  }
  console.log(`post controller post file`, req.file);
  //Stop if validation error

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('validation errors', errors);
    return res.status(400).json({message: ` post upload failed: validation error`, errors: errors});
  }

  const post = req.body;
  post.filename = req.file.filename;
  console.log('post uploaded', post);

  const id = await postModel.createPost(post, res);
  res.json({message: `post created with id: ${id}`});
};
/*
const post_post = async (req, res) => {
  console.log(`post controller post body`, req.body);
  const post = req.body;
  const id = await postModel.createPost(post, res);
  res.json({message: `post created with id: ${id}`});
};

 */

/**
 * @description: This function is used to update a post
 * @param {object} req
 * @param {object} res
 * @returns {object} post
 */
const post_delete_by_id = async (req, res) => {
  console.log(`post controller delete by id`, req.params.id);
  const postDeleted = await postModel.deletePost(req.params.id, res);
  console.log(`post delete by id`);
  res.json({message: `post deleted ${postDeleted}`});
};

const post_get_recent = async (req, res) => {
  console.log(`post controller get recent`);
  const posts = await postModel.getRecentPosts(res);
  res.json(posts);
};

const post_get_by_category = async (req, res) => {
  console.log(`post controller get by category`, req.params.category);
  const posts = await postModel.getPostsByCategory(req.params.category, res);
  res.json(posts);
};

const post_get_by_author = async (req, res) => {
  console.log(`post controller get by author`, req.params.author);
  const posts = await postModel.getPostsCreatedByUser(req.params.author, res);
  res.json(posts);
};

const post_update_likes = async (req, res) => {
  console.log(`post controller update likes`, req.params.id);
  const post = await postModel.postLiked(req.params.id, res);
  res.json(post);
};

const post_get_category_name = async (req, res) => {
  console.log(`post controller get category name`, req.params.id);
  const posts = await postModel.getPostsByCategoryName(req.params.id, res);
  console.log(`post get category name`, posts);
  res.json(posts || {});
};

const post_get_creator_name = async (req, res) => {
  console.log(`post controller get creator name`, req.params.id);
  const posts = await postModel.getPostsCreatorName(req.params.id, res);
  console.log(`post get creator name`, posts);
  res.json(posts || {});;
};

module.exports = {
  post_list_get,
  post_get_by_id,
  post_post,
  post_delete_by_id,
  post_get_recent,
  post_get_by_category,
  post_get_by_author,
  post_update_likes,
  post_get_category_name,
  post_get_creator_name
};