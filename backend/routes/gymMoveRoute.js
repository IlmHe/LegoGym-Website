'use strict';
const express = require(`express`);
const gymMoveController = require('../controllers/gymMoveController');
const router = express.Router();

//Gym move routes

router.route(`/`)
.get(gymMoveController.gymMove_list_get)
.post(gymMoveController.gymMove_post)

router.route(`/:id`)
.get(gymMoveController.gymMove_get_by_id)
.delete(gymMoveController.gymMove_delete_by_id);

router.route('/category/:category')
.get(gymMoveController.gymMove_get_By_category);

router.route('/moveoftheday/:moveoftheday')
.get(gymMoveController.gymMove_get_moveoftheDay);

router.route('/like/:id')
    .put(gymMoveController.gymMove_update_Likes);

router.route('/categoryname/:id')
    .get(gymMoveController.gymMove_get_category_name);

module.exports = router;