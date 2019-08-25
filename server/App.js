// Models ######################
require("./models/User");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");

const requireAuth = require("./middlewares/requireAuth");

const APP = express();

APP.use(bodyParser.json());

// DB #######################
require("./db/mongoose");

// ROUTES #######################
APP.use(authRoutes);

APP.use("/", requireAuth, (req, res, next) => {
    res.send(`User: ${req.user.email}`);
});

module.exports = APP;
