const express = require("express");
const { addTask } = require("../controllers");

const router = express.Router();



router.get("/addTask", addTask)


module.exports = router;