const taskModel = require("../model");


const addTask = (req, res) => {


  let item = req.body;

  const task = new taskModel(item);
  task.save();

  console.log(item);







  res.send("Add task is not implimented yet, but it does save data easily...");
};



module.exports = addTask;
