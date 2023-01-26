const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;
const URI = process.env.URI;

// Router routes and stuff imports here
const home = require("./Routes/Home");
const addTask = require("./Routes/addTask");
const deleteTask = require("./Routes/deleteTask");
const getTasks = require("./Routes/getTasks");
const updateTask = require("./Routes/updateTask");

// Middlewares
app.use(express.json());

// Using these routers
app.use(home);
app.use(addTask);
app.use(deleteTask);
app.use(getTasks);
app.use(updateTask);

// SERVER STARTS HERE AND DB ALSO CONNECTS HERE

mongoose.set("strictQuery", true);

try {
  mongoose.connect(URI, () => {
    console.log("HMMM DB connected...");
  });
} catch (error) {
  console.log("THIS IS THE ERROR");
}

// HERE I AM GOING TO MAKE SCHEMAS

app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON PORT ${PORT}`);
});
