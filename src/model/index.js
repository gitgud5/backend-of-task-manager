const mongoose = require("mongoose");

const schema = mongoose.Schema;

const taskModelSchema = new schema({
  title: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  description: {
    type: String,
    require: true,
  },
  directory: {
    type: String,
    require: true,
    default: "Main",
  },
  imp: {
    type: Boolean,
    required: true,
    default: false,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const taskModel = mongoose.model("tasks", taskModelSchema);

module.exports = taskModel;
