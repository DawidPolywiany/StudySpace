const express = require("express");
const route = express.Router();
const _about_controller = require("../controllers/about");

route.get("/", _about_controller);

module.exports = route;
