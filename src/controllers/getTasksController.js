const taskModel = require("../model");

const getTasks = async (req, res) => {
  let x = await taskModel.find({}).exec();

  console.log(x);

  res.send(x);
};

const getTasksID = async (req, res) => {
  let param = req.params.id;
  console.log(param);
  let x;

  try {
    console.log("try block");

    x = await taskModel.findById(param).exec();
  } catch (error) {
    console.log("catch block");
    console.log(`So uhh....an error happened mate... ${error}`);
  }

  if (x) {
    res.send(x);
  } else {
    res.send("ITEM WASN't FOUND SON!!! HAHAHAHAHAH");
  }
};

module.exports = {
  getTasks,
  getTasksID,
};
