'use strict';
const express = require('express');
const cors = require('cors');
const userRoute = require('./Backend/Routes/userRoute');
const postRoute = require('./Backend/routes/postRoute');
const gymMoveRoute = require('./Backend/routes/gymMoveRoute');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // for parsing appliuserion/json
app.use(express.urlencoded({ extended: true })); // for parsing appliuserion/x-www-form-urlencoded

app.use('/gymMove', gymMoveRoute);
app.use('/user', userRoute);
app.use('/post', postRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
