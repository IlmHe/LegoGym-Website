'use strict';
const pool = require('../Database/db');
const promisePool = pool.promise();

/**
 * @description: This function is used to get all gym moves from the database
 * @param {object} res
 * @returns {object} rows
 */
const getAllGymMoves = async (res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM GymMoves');
    return rows;
  } catch (e) {
    console.error('GymMove model getAllGymMoves error', e.message);
    res.status(500).json({ message: "Something went wrong"});
    return;
  }
};

/**
 * Returns a gym move by id, else returns an error
 */
const getGymMoveId = async (id, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM GymMoves WHERE GymMoveId = ?', [id]);
    return rows[0];
  } catch (e) {
    console.error('GymMove model getGymMoveId error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

/**
 * Adds a gym move to the database, else returns an error
 */
const createGymMove = async (gymMove, res) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO GymMoves(MoveName, Category, Likes, Comments) VALUES (?,?,?,?)`,
        [gymMove.MoveName, gymMove.Category, gymMove.Likes, gymMove.Comments]);
    console.log(`GymMove model insert`, rows, rows[0]);
    return rows.insertId;
  } catch (e) {
    console.error('GymMove model createGymMove error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

/**
 * Deletes a gym move from the database, else returns an error
 */
const deleteGymMove = async (id, res) => {
  try {
    const [rows] = await promisePool.query('DELETE FROM GymMoves WHERE GymMoveId = ?', [id]);
    console.log(`GymMove model delete`, rows,);
    return rows.affectedRows === 1;
  } catch (e) {
    console.error('GymMove model delete Move error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

//Lisätty
const getGymMoveofTheDay = async (res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM GymMoves ORDER BY RAND() LIMIT 1');
    return rows[0];
  } catch (e) {
    console.error('GymMove model getGymMoveofTheDay error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

//Lisätty
const getGymMovebyCategory = async (category, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM GymMoves WHERE Category = ?', [category]);
    return rows[0];
  } catch (e) {
    console.error('GymMove model getGymMovebyCategory error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

module.exports = {
  getAllGymMoves,
  getGymMoveId,
  createGymMove,
  deleteGymMove,
  getGymMoveofTheDay,
  getGymMovebyCategory
};