'use strict';
const express = require(`express`);
/*
const multer = require('multer');
*/
const {body} = require('express-validator');
const postController = require('../Controllers/postController');
const router = express.Router();

router.route(`/`)
.get(postController.post_list_get)
.post(postController.post_post);


router.route(`/:id`)
.get(postController.post_get_by_id)
.delete(postController.post_delete_by_id)

module.exports = router;