const taskModel = require("../model");

const deleteTask = async (req, res) => {
  await taskModel.deleteOne({ _id: req.params.id });

  res.send("Impliemnting delete task");
};

module.exports = deleteTask;
