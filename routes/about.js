const express = require("express");
const route = express.Router();

route.get("/", require("../controllers/about"));

module.exports = route;
