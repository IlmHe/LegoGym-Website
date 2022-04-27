'use strict';
const express = require(`express`);
const multer = require('multer');
const {body} = require('express-validator');
const postController = require('../Controllers/postController');
const router = express.Router();

/*
* Post routes
 */
const fileFilter = (req, file, cb) => {
  const allowedMimetypes = ['image/jpeg', 'image/png'];
  if (allowedMimetypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({dest: './uploads/', fileFilter});

router.route(`/`)
.get(postController.post_list_get)
.post(upload.single('post'),
    postController.post_post);

router.route(`/:id`)
.get(postController.post_get_by_id)
.delete(postController.post_delete_by_id)

router.route('/category/:category')
.get(postController.post_get_by_category);

router.route('/user/:author')
.get(postController.post_get_by_author);

router.route('/recent/:recent')
.get(postController.post_get_recent);

router.route('/like/:id')
    .put(postController.post_update_likes);

router.route('/categoryname/:id')
    .get(postController.post_get_category_name);

router.route('/creatorname/:id')
    .get(postController.post_get_creator_name);

module.exports = router;