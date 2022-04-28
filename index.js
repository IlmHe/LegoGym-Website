'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoute = require('./Backend/Routes/userRoute');
const postRoute = require('./Backend/routes/postRoute');
const gymMoveRoute = require('./Backend/routes/gymMoveRoute');
const authRoute = require('./Backend/routes/authRoute');
const passport = require('./Backend/utils/pass');
const session = require("express-session");
const index = express();
const port = process.env.PORT || 3000;

/*const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/form');
  }
};

index.set('views', './FrontEnd/Views');
index.set('view engine', 'pug');*/

index.use(session({secret: "ojoeaogjeojoaevajvavea"}));
index.use(passport.initialize());
index.use(passport.session());
index.use(cors());
index.use(express.json()); // for parsing appliuserion/json
index.use(express.urlencoded({ extended: true }));// for parsing appliuserion/x-www-form-urlencoded
index.use(passport.initialize());

//Lisätty
//index.use('/gymMove/category', gymMoveRoute);
//Lisätty
//index.use('/gymMove/moveoftheday', gymMoveRoute);

index.use(express.static('uploads'));
index.use('/auth', authRoute);
index.use('/gymMove', gymMoveRoute);
index.use('/user', userRoute);
index.use('/post', postRoute)
/*
index.use('/gymMove', passport.authenticate('jwt', {session: false}), gymMoveRoute);
index.use('/user', passport.authenticate('jwt', {session: false}), userRoute);
index.use('/post', passport.authenticate('jwt', {session: false}), postRoute);

 */

/*index.post('/login',
    passport.authenticate('local', {failureRedirect: '/form'}),
    (req, res) => {
      console.log('success');
      res.redirect('/secret');
    });

index.get('/secret', loggedIn, (req, res) => {
  res.render('secret');
});

index.get('/form', (req, res) => {
  res.render('form');
});

index.get('/secret/logout', function (req, res) {
  req.logout();
  res.redirect('/form');
});*/


/*index.get('/', (req, res) => {
  if (req.secure) {
    res.send('Hello Secure World!');
  } else {
    res.send('./FrontEnd/HTML/index.html');
  }
});*/


index.listen(port, () => console.log(`Example app listening on port ${port}!`));
//https.createServer(options, index).listen(8001);

