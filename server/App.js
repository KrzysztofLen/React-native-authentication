const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const APP = express();

APP.use((req, res, next) => {
    res.send({
        message: "Hello from server"
    });
});

module.exports = APP;
