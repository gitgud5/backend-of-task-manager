const express = require("express");
const { addTask } = require("../controllers");

const router = express.Router();

const addTaskFunction = () => {
    router.post("/", addTask);
    return router;
}





module.exports = addTaskFunction;