'use strict';
const userModel = require('../models/userModel');

/**
 * @description: This function is used to get all the users
 * @param {object} req
 * @param {object} res
 * @returns {object} users
 */
const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers(res);
  res.json(users);
};

/**
 * @description: This function is used to get a single user
 * @param {object} req
 * @param {object} res
 * @returns {object} user
 */
const user_get_by_id = async (req, res) => {
  console.log(`user controller get by id`, req.params.id);
  const user = await userModel.getUserId(req.params.id, res);
  console.log(`user get by id`, user);
  res.json(user || {});
};

/**
 * @description: This function is used to create a new user
 * @param {object} req
 * @param {object} res
 * @returns {object} user
 */
const user_post = async (req, res) => {
  console.log(`user controller post body`, req.body);
  const user = req.body;
  const id = await userModel.createUser(user, res);
  res.json({message: `usercreated with id: ${id}`});
};

/**
 * @description: This function is used to update a user
 * @param {object} req
 * @param {object} res
 * @returns {object} user
 */
const user_update = async (req, res) => {
  console.log(`user controller put`, req.body);
  const user = req.body;
  const modified = await userModel.updateUser(user, res);
  console.log({message: `user modified ${modified}`});
};

/**
 * @description: This function is used to delete a user
 * @param {object} req
 * @param {object} res
 * @returns {object} user
 */
const user_delete_by_id = async (req, res) => {
  console.log(`user controller delete by id`, req.params.id);
  const userDeleted = await userModel.deleteUser(req.params.id, res);
  console.log(`user delete by id`);
  res.json({message: `user deleted ${userDeleted}`});
};

const user_get_profilepic = async (req, res) => {
  console.log(`user controller get profile pic`, req.params.id);
  const user = await userModel.getProfilePic(req.params.id, res);
  console.log(`user get profile pic`, user);
  res.json(user || {});
};

const checkToken = (req, res, next) => {
  if (!req.user) {
    next(new Error('token not valid'));
  } else {
    res.json({ user: req.user });
  }
};

const propic_list_get = async (req, res) => {
  const pics = await userModel.getAllProfilePics(res);
  res.json(pics);
};

const category_list_get = async (req, res) => {
  const category = await userModel.getAllCategories(res);
  res.json(category);
};

module.exports = {
  user_list_get,
  user_get_by_id,
  user_post,
  user_update,
  user_delete_by_id,
  user_get_profilepic,
  checkToken,
  propic_list_get,
  category_list_get
};