'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoute = require('./BackEnd/Routes/userRoute');
const postRoute = require('./BackEnd/Routes/postRoute');
const gymMoveRoute = require('./BackEnd/Routes/gymMoveRoute');
const authRoute = require('./BackEnd/Routes/authRoute');
const passport = require('./BackEnd/utils/pass');
const session = require("express-session");
const legoapp = express();
const port = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'production') {
  require('./BackEnd/utils/production')(legoapp, port);
} else {
  require('./BackEnd/utils/localhost')(legoapp, port);
}
legoapp.get('/', (req, res) => {
  res.send('Hello Secure World!');
});


/*const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/form');
  }
};

legoapp.set('views', './FrontEnd/Views');
legoapp.set('view engine', 'pug');*/
legoapp.use(cors());
legoapp.use(express.json()); // for parsing appliuserion/json
legoapp.use(express.urlencoded({ extended: true }));// for parsing appliuserion/x-www-form-urlencoded

//legoapp.use(session({secret: "ojoeaogjeojoaevajvavea"}));
legoapp.use(passport.initialize());
//legoapp.use(passport.session());


//legoapp.use(passport.initialize());

//Lisätty
//legoapp.use('/gymMove/category', gymMoveRoute);
//Lisätty
//legoapp.use('/gymMove/moveoftheday', gymMoveRoute);

legoapp.use(express.static('uploads'));
legoapp.use('/auth', authRoute);
//legoapp.use('/gymMove', gymMoveRoute);
//legoapp.use('/user', userRoute);
//legoapp.use('/post', postRoute)


legoapp.use('/gymMove', passport.authenticate('jwt', {session: false}), gymMoveRoute);
legoapp.use('/user', passport.authenticate('jwt', {session: false}), userRoute);
legoapp.use('/post', passport.authenticate('jwt', {session: false}), postRoute);

legoapp.get('/', (req, res) => {
  if (req.secure) {
    res.send('Hello Secure World!');
  } else {
    res.send('not secured?');
  }
});


/*legoapp.post('/login',
    passport.authenticate('local', {failureRedirect: '/form'}),
    (req, res) => {
      console.log('success');
      res.redirect('/secret');
    });

legoapp.get('/secret', loggedIn, (req, res) => {
  res.render('secret');
});

legoapp.get('/form', (req, res) => {
  res.render('form');
});

legoapp.get('/secret/logout', function (req, res) {
  req.logout();
  res.redirect('/form');
});*/


/*legoapp.get('/', (req, res) => {
  if (req.secure) {
    res.send('Hello Secure World!');
  } else {
    res.send('./FrontEnd/HTML/index.html');
  }
});*/


//legoapp.listen(port, () => console.log(`Example app listening on port ${port}!`));
//https.createServer(options, legoapp).listen(8001);

