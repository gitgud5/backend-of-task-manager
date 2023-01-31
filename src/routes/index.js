const express = require('express');
const routes = express.Router();
const home = require('./Home');
const addTaskRoute = require('./addTask');
const deleteTaskRoute = require('./deleteTask');
const getTasksRoute = require('./getTasks');
const updateTasksRoute = require('./updateTask');


// * Using these routers
module.exports = () => {
    routes.use('/', home())
    routes.use('/add-task', addTaskRoute())
    routes.use('/delete-task', deleteTaskRoute())
    routes.use('/get-tasks', getTasksRoute())
    routes.use('/update-task', updateTasksRoute())
    return routes
};