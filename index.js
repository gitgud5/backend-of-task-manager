const express = require("express");
const app = express();
const Mongoose = require("mongoose");
const URI =
  "mongodb+srv://bro_dude:coolpass@clusteroftasks.8sbjevb.mongodb.net/?retryWrites=true&w=majority";
const PORT = 3000;
const router1 = require('./Routes/homeRoutes');

app.get("/", (req, res) => {
  console.log("This is the MAIN page");
  res.send("WTF IS GOING ON IN THE BACKEND???");
});



app.use("/home", router1);
app.use("/cars", router1);






// SERVER STARTS HERE
app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON PORT ${PORT}`);
});
