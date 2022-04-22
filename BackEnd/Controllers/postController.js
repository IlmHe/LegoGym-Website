'use strict';

const postModel = require('../models/postModel');

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
const post_post = async (req, res) => {
  console.log(`post controller post body`, req.body);
  const post = req.body;
  const id = await postModel.createPost(post, res);
  res.json({message: `post created with id: ${id}`});
};

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

module.exports = {
  post_list_get,
  post_get_by_id,
  post_post,
  post_delete_by_id
};