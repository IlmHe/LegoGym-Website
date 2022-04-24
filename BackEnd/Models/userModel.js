
'use strict';
const pool = require('../Database/db');
const promisePool = pool.promise();

/**
 * Returns all users from the database, else returns an error
 */
const getAllUsers = async (res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM Users');
    return rows;
  } catch (e) {
    console.error('User model getAllUsers error', e.message);
    res.status(500).json({ message: "Something went wrong"});
    return;
  }
};

/**
 * Returns a user by id, else returns an error
 */
const getUserId = async (id, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM Users WHERE UserId = ?', [id]);
    return rows[0];
  } catch (e) {
    console.error('User model getAllUsers error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

/**
 * Adds a user to the database, else returns an error
 */
const createUser = async (User, res) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO Users(Username, Email, Password, ProfilePic, ProfileText) VALUES (?,?,?,?,?)`,
        [User.Username, User.Email, User.Password, User.ProfilePic, User.ProfileText]);
    console.log(`User model insert`, rows, rows[0]);
    return rows.insertId;
  } catch (e) {
    console.error('User model createUser error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

/**
 * Modifies a user in the database, else returns an error
 */
const updateUser = async (User, res) => {
  try {
    const [rows] = await promisePool.query("UPDATE `Users` SET Username = ?, Email = ?, Password = ?, ProfilePic = ?, ProfileText = ? WHERE UserId = ?",
        [User.Username, User.Email, User.Password, User.ProfilePic, User.ProfileText]);
    console.log(`User model update`, rows,);
    return rows.affectedRows === 1;
  } catch (e) {
    console.error('User model update error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

/**
 * Deletes a user from the database, else returns an error
 */
const deleteUser = async (id, res) => {
  try {
    const [rows] = await promisePool.query('DELETE FROM Users WHERE UserId = ?', [id]);
    console.log(`User model delete`, rows,);
    return rows.affectedRows === 1;
  } catch (e) {
    console.error('User model getAllUsers error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

module.exports = {
  getAllUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
};