const express = require("express");
const {addTask}  = require("../controllers");

const router = express.Router();



router.post("/addTask", addTask)


module.exports = router;