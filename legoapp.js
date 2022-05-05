'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoute = require('./backend/routes/userRoute');
const postRoute = require('./backend/routes/postRoute');
const gymMoveRoute = require('./backend/routes/gymMoveRoute');
const authRoute = require('./backend/routes/authRoute');
const passport = require('./backend/utils/pass');
const session = require("express-session");
const app = express();
const port = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'production') {
  require('./backend/utils/production')(app, port);
} else {
  require('./backend/utils/localhost')(app, port);
}
app.get('/', (req, res) => {
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
app.use(cors());
app.use(express.json()); // for parsing appliuserion/json
app.use(express.urlencoded({ extended: true }));// for parsing appliuserion/x-www-form-urlencoded

//legoapp.use(session({secret: "ojoeaogjeojoaevajvavea"}));
app.use(passport.initialize());
//legoapp.use(passport.session());


//legoapp.use(passport.initialize());

//Lisätty
//legoapp.use('/gymMove/category', gymMoveRoute);
//Lisätty
//legoapp.use('/gymMove/moveoftheday', gymMoveRoute);

app.use(express.static('uploads'));
app.use('/auth', authRoute);
app.use('/gymMove', gymMoveRoute);
app.use('/user', userRoute);
app.use('/post', postRoute)


//app.use('/gymMove', passport.authenticate('jwt', {session: false}), gymMoveRoute);
//app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);
//app.use('/post', passport.authenticate('jwt', {session: false}), postRoute);

app.get('/', (req, res) => {
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

