const express = require("express");
const { DeleteTask } = require("../controllers");

const router = express.Router();



router.delete('/deleteTask/:id', DeleteTask)


module.exports = router;