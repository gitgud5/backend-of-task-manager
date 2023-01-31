const express = require("express");
require("dotenv").config();
const Routes = require("./routes");
const PORT = process.env.PORT;

const app = express()

const NodeJsServer = () => {
    try {
        // Middlewares
        app.use(express.json());
        app.use(Routes())
        app.listen(PORT, () => {
            console.log(`APP IS LISTENING ON PORT ${PORT}`);
        });
    } catch (error) {
        console.log("🚀 ~ file: index.js:17 ~ NodeJsServer ~ error", error)
    }
}
NodeJsServer()