'use strict';

const postModel = require('../models/postModel');

const post_list_get = async (req, res) => {
  const posts= await postModel.getAllPosts(res);
  res.json(posts);
};

const post_get_by_id = async (req, res) => {
  console.log(`post controller get by id`, req.params.id);
  const post = await postModel.getPostbyId(req.params.id, res);
  console.log(`post get by id`, post);
  res.json(post || {});

};

const post_post = async (req, res) => {
  console.log(`post controller post body`, req.body);
  const post = req.body;
  const id = await postModel.createPost(post, res);
  res.json({message: `post created with id: ${id}`});
};

const post_delete_by_id = async (req, res) => {
  console.log(`post controller delete by id`, req.params.id);
  const postDeleted = await postModel.deletePost(req.params.id, res);
  console.log(`post delete by id`);
  res.json({message: `post deleted ${postDeleted}`});
};

//Lisätty
const post_get_recent = async (req, res) => {
  console.log(`post controller get recent`);
  const posts = await postModel.getRecentPosts(res);
  res.json(posts);
};

//Lisätty
const post_get_by_category = async (req, res) => {
  console.log(`post controller get by category`, req.params.category);
  const posts = await postModel.getPostsByCategory(req.params.category, res);
  res.json(posts);
};

//Lisätty
const post_get_by_author = async (req, res) => {
  console.log(`post controller get by author`, req.params.author);
  const posts = await postModel.getPostsCreatedByUser(req.params.author, res);
  res.json(posts);
};

module.exports = {
  post_list_get,
  post_get_by_id,
  post_post,
  post_delete_by_id,
  post_get_recent,
  post_get_by_category,
  post_get_by_author
};