const express = require("express");
const { DeleteTask } = require("../controllers");

const router = express.Router();



router.get('/deleteTask/:id', DeleteTask)


module.exports = router;