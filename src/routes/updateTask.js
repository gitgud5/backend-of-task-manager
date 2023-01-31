const express = require("express");

const router = express.Router();
const { updateTask } = require('../controllers');

const updateTaskFunction = () => {
    router.patch('/:id', updateTask);
    return router;

}




module.exports = updateTaskFunction;