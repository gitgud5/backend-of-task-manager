const taskModel = require("../model");


const updateTask = async (req, res) => {
  await taskModel.updateOne(
    { _id: req.params.id },
    {
      title: "King in the North12",
      description: "Some game of thrones character"
    }
  );

  const doc = await taskModel.findOne();
  doc.title; // "King in the North"
  res.send("Impliemnting update task")
};

module.exports = updateTask;
