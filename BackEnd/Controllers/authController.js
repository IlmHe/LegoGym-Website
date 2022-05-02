'use strict';
const jwt = require('jsonwebtoken');
//const brcypt = require('bcrypt');
const passport = require('passport');


const login = (req, res, next) => {
  // TODO: add passport authenticate
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


module.exports = {
  login,
};