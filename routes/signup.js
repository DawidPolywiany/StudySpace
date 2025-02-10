const express = require("express");
const route = express.Router();
const _signup_controller = require("../controllers/signup");

route.get("/", _signup_controller);

module.exports = route;
