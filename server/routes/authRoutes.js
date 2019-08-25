const express = require("express");

const Router = express.Router();

const registerController = require("../controllers/registerController");
const loginController = require("./../controllers/loginController");

/**
 * @type POST
 * @description Register new user
 */
Router.post("/register", registerController);

/**
 * @type POST
 * @description Login user with credentials
 */
Router.post("/login", loginController);

module.exports = Router;
