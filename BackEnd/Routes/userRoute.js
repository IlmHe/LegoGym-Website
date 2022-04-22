'use strict';
// userRoute
const express = require(`express`);
/*
const multer = require('multer');
*/
const {body} = require('express-validator');
const userController = require('../Controllers/userController');
const router = express.Router();

/*
* User move routes
 */

/*const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif']
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


const upload = multer({dest: './uploads/', fileFilter});*/

/*router.route(`/`)
.get(userController.user_list_get)
.post(upload.single('user'),
    body('name').isLength({min: 1}),
    body('birthdate').isDate(),
    body('weight').isNumeric(),
    body('owner').isNumeric(),
    userController.user_post)
.put(userController.user_update);*/
router.route(`/`)
.get(userController.user_list_get)
.post(userController.user_post)
.put(userController.user_update);


router.route(`/:id`)
.get(userController.user_get_by_id)
.delete(userController.user_delete_by_id);

module.exports = router;