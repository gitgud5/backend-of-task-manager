const express = require("express");

const routers = express.Router();


routers
  .route("/")
  .get((req, res) => {
    console.log("This is the home page");
    // console.log(req.);
    res.send("<h1>WTF IS HAPPENING IN TIS DUMBASS CAR</h1>");
  })
  .post((req, res) => {
    console.log("This is the HOMES version of home");
    res.send("<h1>OMFG we are in home POST category now??? HAHAHAHAHAH</h1>");
  });

routers
  .route("/:id")
  .get((req, res) => {
    console.log(req.params);
    res.send(`<h1>WTF IS HAPPENING IN TIS DUMBASS CAR NUMBER ${req.params.id}</h1>`);
  })
  .post((req, res) => {
    console.log("SOMETHING IS POSTED HERE");
  });

module.exports = routers;