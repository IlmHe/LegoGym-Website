'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoute = require('./backend/routes/userRoute');
const postRoute = require('./backend/routes/postRoute');
const gymMoveRoute = require('./backend/routes/gymMoveRoute');
const authRoute = require('./backend/routes/authRoute');
const passport = require('./backend/utils/pass');
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

app.use(cors());
app.use(express.json()); // for parsing appliuserion/json
app.use(express.urlencoded({ extended: true }));// for parsing appliuserion/x-www-form-urlencoded
app.use(passport.initialize());
app.use(express.static('uploads'));
app.use('/auth', authRoute);
app.use('/gymMove', gymMoveRoute);
app.use('/user', userRoute);
app.use('/post', postRoute)

//app.use('/gymMove', passport.authenticate('jwt', {session: false}), gymMoveRoute);
//app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);
//app.use('/post', passport.authenticate('jwt', {session: false}), postRoute);


