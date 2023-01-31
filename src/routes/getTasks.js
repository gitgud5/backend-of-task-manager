const express = require("express");
const { getTasks, getTasksID } = require("../controllers");

const router = express.Router();

const getTasksFunction = () => {
    router.get('/', getTasks)

    router.get('/:id', getTasksID)
    return router;

}


module.exports = getTasksFunction;