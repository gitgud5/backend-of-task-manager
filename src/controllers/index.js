const updateTask = require("./updateTaskController");
const addTask = require("./addTaskController");
const { getTasks, getTasksID } = require('./getTasksController')
const Home = require('./HomeController')
const DeleteTask = require('./deleteTaskController')

module.exports = {
  updateTask,
  addTask,
  getTasks,
  getTasksID,
  Home,
  DeleteTask,
};
