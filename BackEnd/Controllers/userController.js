'use strict';
// userController
const userModel = require('../models/userModel');
const {validationResult} = require('express-validator')

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers(res);
  res.json(users);
};

const user_get_by_id = async (req, res) => {
  console.log(`user controller get by id`, req.params.id);
  const user = await userModel.getUserId(req.params.id, res);
  console.log(`user get by id`, user);
  //res.send(`From this endpoint you can get users by ${req.params.id}.`);
  res.json(user || {});

};

const user_post = async (req, res) => {
  console.log(`user controller post body`, req.body);
  const user = req.body;
  const id = await userModel.createUser(user, res);
  res.json({message: `usercreated with id: ${id}`});
};


/*
const user_post = async (req, res) => {
  console.log(`user controller post body`, req.body);

  if (!req.file) {
    return res.status(400).json({
          message: `file is invalid`
        }
    );
  }
  console.log(`user controller post file`, req.file);
  //Stop if validation errors

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('validation errors', errors);
    return res.status(400).json({
          message: `user upload failed: validation error ${errors}`,
          errors: errors
        }
    );
  }

  const user = req.body;
  user.filename = req.file.filename;
  const id = await userModel.createUser(user, res);
  res.json({message: `user created with id: ${id}`});
  //res.json({message: `user created`})
};
 */


const user_update = async (req, res) => {
  console.log(`user controller put`, req.body);
  const user = req.body;
  const modified = await userModel.updateUser(user, res);
  //res.json({message: `user modified: ${modified}`});
  console.log({message: `user modified ${modified}`});
};

const user_delete_by_id = async (req, res) => {
  console.log(`user controller delete by id`, req.params.id);
  const userDeleted = await userModel.deleteUser(req.params.id, res);
  console.log(`user delete by id`);
  res.json({message: `user deleted ${userDeleted}`});
};

module.exports = {
  user_list_get,
  user_get_by_id,
  user_post,
  user_update,
  user_delete_by_id
};