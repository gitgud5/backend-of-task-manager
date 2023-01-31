require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.URI;

module.exports = () => {
    // SERVER STARTS HERE AND DB ALSO CONNECTS HERE
    mongoose.set("strictQuery", true);

    try {
        mongoose.connect(URI, () => {
            console.log("HMMM DB connected...");
        });
    } catch (error) {
        console.log("THIS IS THE ERROR");
    }
}