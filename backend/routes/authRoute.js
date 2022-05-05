'use strict';
const express = require('express');
const router = express.Router();
const {body, sanitizeBody} = require('express-validator')
const {login, user_post, logout} = require('../controllers/authController');

router.post('/login', login);
router.get('/logout', logout);
router.post('/register',
    [
      body('name', 'minimum 3 characters').isLength({min: 3}),
      body('username', 'email is not valid').isEmail(),
      body('password', 'at least one upper case letter').
          matches('(?=.*[A-Z]).{8,}'),
      body('profilepic'),
      body('profiletext', 'minimum 3 characters').isLength({min: 3}),
      sanitizeBody('name').escape(),
    ],
    user_post
);
module.exports = router;
