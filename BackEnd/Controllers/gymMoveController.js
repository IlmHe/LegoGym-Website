'use strict';

const gymMoveModel = require('../Models/gymMoveModel');

/**
 * @description: This function is used to get all the gym moves
 * @param {object} req
 * @param {object} res
 * @returns {object} gymMoves
 */
const gymMove_list_get = async (req, res) => {
  const gymMoves = await gymMoveModel.getAllGymMoves(res);
  res.json(gymMoves);
};

/**
 * @description: This function is used to get a gym move by id
 * @param {object} req
 * @param {object} res
 * @returns {object} gymMove
 */
const gymMove_get_by_id = async (req, res) => {
  console.log(`gymMove controller get by id`, req.params.id);
  const gymMove = await gymMoveModel.getGymMoveId(req.params.id, res);
  console.log(`gymMove get by id`, gymMove);
  res.json(gymMove || {});
};

/**
 * @description: This function is used to create a gym move
 * @param {object} req
 * @param {object} res
 * @returns {object} gymMove
 */
const gymMove_post = async (req, res) => {
  console.log(`gymMove controller post body`, req.body);
  const gymMove = req.body;
  const id = await gymMoveModel.createGymMove(gymMove, res);
  res.json({message: `gymMove created with id: ${id}`});
};

/**
 * @description: This function is used to delete a gym move
 * @param {object} req
 * @param {object} res
 * @returns {object} gymMove
 */
const gymMove_delete_by_id = async (req, res) => {
  console.log(`gymMove controller delete by id`, req.params.id);
  const gymMoveDeleted = await gymMoveModel.deleteGymMove(req.params.id, res);
  console.log(`gymMove delete by id`);
  res.json({message: `gymMove deleted ${gymMoveDeleted}`});
};

const gymMove_get_moveoftheDay = async (req, res) => {
  console.log(`gymMove controller get move of the day`);
  const gymMove = await gymMoveModel.getGymMoveofTheDay(res);
  console.log(`gymMove get move of the day`, gymMove);
  res.json(gymMove || {});
};

const gymMove_get_By_category = async (req, res) => {
  console.log(`gymMove controller get by category`, req.params.category);
  const gymMove = await gymMoveModel.getGymMovebyCategory(req.params.category, res);
  console.log(`gymMove get by category`, gymMove);
  res.json(gymMove || {});
};

const gymMove_update_Likes = async (req, res) => {
  console.log(`gymMove controller update likes`, req.params.id);
  const gymMove = await gymMoveModel.updateGymMoveLikes(req.params.id, res);
  console.log(`gymMove update likes`, gymMove);
  res.json(gymMove || {});
};

const gymMove_get_category_name = async (req, res) => {
  console.log(`gymMove controller get category name`, req.params.id);
  const gymMove = await gymMoveModel.getGymMoveCategoryName(req.params.id, res);
  console.log(`gymMove get category name`, gymMove);
  res.json(gymMove || {});
};

module.exports = {
  gymMove_list_get,
  gymMove_get_by_id,
  gymMove_post,
  gymMove_delete_by_id,
  gymMove_get_moveoftheDay,
  gymMove_get_By_category,
  gymMove_update_Likes,
  gymMove_get_category_name
};