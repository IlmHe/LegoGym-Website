'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const passport = require('passport');
const {createUser} = require('../models/userModel');

// User login
const login = (req, res, next) => {
  passport.authenticate('local', {session: false}, (err, user, info) => {
    console.log('user', user);
    if (err || !user) {
      return res.status(400).json({
        message: 'Something diddly done did went wrong',
        user: user,
        err: err,
        info: info,
      });
    }
    req.login(user, {session: false}, (err) => {
      if (err) {
        res.send(err);
      }
      const token = jwt.sign(user, 'ncaösdkljvdöhgbvn');
      return res.json({user, token})
    })
  })(req, res, next);
};

// User registration, password hashing and saving to database
const user_post = async (req, res) => {
  console.log(`user controller post body`, req.body);
  const hash = await bcrypt.hash(req.body.password, 12);
  const newUser = {
    Username: req.body.username,
    Email: req.body.email,
    Password: hash,
    ProfileText: req.body.profiletext,
    ProfilePic: req.body.profilepic,
  };
  const result = await createUser(newUser);
  console.log(`user controller post result`, result);
  if(result) {
    return res.status(201).json({
      message: 'User created',
      user: newUser
    });
  } else {
    return res.status(400).json({
      message: 'User not created',
      user: newUser
    });
  }
};

// User logout
const logout = (req, res) => {
  res.json({message: 'logged out'});
};

module.exports = {
  login,
  logout,
  user_post
};