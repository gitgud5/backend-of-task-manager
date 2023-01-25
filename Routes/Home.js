const express = require("express");
const { Home } = require("../controllers");

const router = express.Router();


router.get('/', Home)


module.exports=router;