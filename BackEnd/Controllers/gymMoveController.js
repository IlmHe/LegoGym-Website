'use strict';

const gymMoveModel = require('../models/gymMoveModel');

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

module.exports = {
  gymMove_list_get,
  gymMove_get_by_id,
  gymMove_post,
  gymMove_delete_by_id
};