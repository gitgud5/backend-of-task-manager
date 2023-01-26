const express = require("express");

const router = express.Router();
const {updateTask} = require('../controllers')


router.patch('/updateTask/:id', updateTask );


module.exports = router;