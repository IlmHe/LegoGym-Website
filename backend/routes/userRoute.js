'use strict';

const express = require(`express`);
const userController = require('../controllers/userController');
const router = express.Router();

// userRoute

router.route('/token')
.get(userController.checkToken);

router.route(`/`)
.get(userController.user_list_get)
.post(userController.user_post)
.put(userController.user_update);

router.route(`/:id`)
.get(userController.user_get_by_id)
.delete(userController.user_delete_by_id);

router.route('/category/all')
    .get(userController.category_list_get);

router.route('/profilepic/all')
    .get(userController.propic_list_get);

router.route('/profilepic/:id')
    .get(userController.user_get_profilepic);

module.exports = router;