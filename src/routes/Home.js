const express = require("express");
const { Home } = require("../controllers")

const router = express.Router();


module.exports = () => {
    router.get('/', Home)
    router.get('/:id', Home)
    return router
}