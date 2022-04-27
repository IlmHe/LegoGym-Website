'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {addUser} = require('../Models/userModel');

const login = (req, res, next) => {
  // TODO: add passport authenticate
  passport.authenticate('local', {session: false}, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user: user,
      });
    }
    req.login(user, {session: false}, (err) => {
      if (err) {
        res.send(err);
      }
      const token = jwt.sign(user, 'ncaösdkljvdöhgbvn');
      return res.json({user, token});
    });
  })(req, res, next);
};

const user_post = async (req, res) => {
  console.log('user controller post body', req.body);
  const hash = await bcrypt.hash(req.body.passwd, 12);
  console.log('password hash', hash);
  const newUser = {
    username: req.body.name,
    email: req.body.email,
    password: hash,
  };
  // store in db...
  const result = await addUser(newUser);
  //console.log('added user to db', result);
  if (result.insertId) {
    res.json({message: 'User added.'});
  } else {
    res.status(400).json({message: 'User register failed'});
  }
};

const logout = (req, res) => {
  res.json({message: 'logged out'});
};

module.exports = {
  login,
  user_post,
  logout,
};
