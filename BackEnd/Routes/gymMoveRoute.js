'use strict';
const express = require(`express`);
/*
const multer = require('multer');
*/
const {body} = require('express-validator');
const gymMoveController = require('../Controllers/gymMoveController');
const router = express.Router();

/*
* Gym move routes
 */

router.route(`/`)
.get(gymMoveController.gymMove_list_get)
.post(gymMoveController.gymMove_post)


router.route(`/:id`)
.get(gymMoveController.gymMove_get_by_id)
.delete(gymMoveController.gymMove_delete_by_id);

module.exports = router;