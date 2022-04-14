
'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async (res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM users');
    return rows;
  } catch (e) {
    console.error('User model getAllUsers error', e.message);
    res.status(500).json({ message: "Something went wrong"});
    return;
  }
};

const getUserId = async (id, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM users WHERE User_id = ?', [id]);
    return rows[0];
  } catch (e) {
    console.error('User model getAllUsers error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};


const createUser = async (User, res) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO users(name, weight, owner, filename, birthdate) VALUES (?,?,?,?,?)`,
        [User.name, User.weight, User.owner, User.filename, User.birthdate]);
    console.log(`User model insert`, rows, rows[0]);
    return rows.insertId;
  } catch (e) {
    console.error('User model createUser error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

const updateUser = async (User, res) => {
  try {
    const [rows] = await promisePool.query("UPDATE `users` SET name = ?, birthdate = ?, weight = ?, owner = ? WHERE User_id = ?",
        [User.name, User.birthdate, User.weight, User.owner, User.id]);
    console.log(`User model update`, rows,);
    return rows.affectedRows === 1;
  } catch (e) {
    console.error('User model update error', e.message);
    res.status(500).json({message: "Something went wrong"});
    return;
  }
};

const deleteUser = async (id, res) => {
  try {
    const [rows] = await promisePool.query('DELETE FROM users WHERE User_id = ?', [id]);
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