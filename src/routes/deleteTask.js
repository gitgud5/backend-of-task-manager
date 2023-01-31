const express = require("express");
const { DeleteTask } = require("../controllers");

const router = express.Router();

const deleteTaskFunction = () => {

    router.delete('/:id', DeleteTask)
    return router;
}



module.exports = deleteTaskFunction;