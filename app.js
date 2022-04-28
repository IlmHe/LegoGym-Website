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
const app = express();
const port = process.env.PORT || 3000;

/*const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/form');
  }
};

app.set('views', './FrontEnd/Views');
app.set('view engine', 'pug');*/

app.use(session({secret: "ojoeaogjeojoaevajvavea"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json()); // for parsing appliuserion/json
app.use(express.urlencoded({ extended: true }));// for parsing appliuserion/x-www-form-urlencoded
app.use(passport.initialize());

//Lisätty
//app.use('/gymMove/category', gymMoveRoute);
//Lisätty
//app.use('/gymMove/moveoftheday', gymMoveRoute);

app.use(express.static('uploads'));
app.use('/auth', authRoute);
app.use('/gymMove', gymMoveRoute);
app.use('/user', userRoute);
app.use('/post', postRoute)
/*
app.use('/gymMove', passport.authenticate('jwt', {session: false}), gymMoveRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);
app.use('/post', passport.authenticate('jwt', {session: false}), postRoute);

 */

/*app.post('/login',
    passport.authenticate('local', {failureRedirect: '/form'}),
    (req, res) => {
      console.log('success');
      res.redirect('/secret');
    });

app.get('/secret', loggedIn, (req, res) => {
  res.render('secret');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.get('/secret/logout', function (req, res) {
  req.logout();
  res.redirect('/form');
});*/


/*app.get('/', (req, res) => {
  if (req.secure) {
    res.send('Hello Secure World!');
  } else {
    res.send('./FrontEnd/HTML/index.html');
  }
});*/


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//https.createServer(options, app).listen(8001);

