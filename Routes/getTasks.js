const express = require("express");
const { getTasks, getTasksID } = require("../controllers");

const router = express.Router();


router.get('/getTasks', getTasks)

router.get('/getTasks/:id', getTasksID)

module.exports = router;