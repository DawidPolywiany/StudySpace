const express = require("express");
const route = express.Router();

route.get("/", require("../controllers/application"));

module.exports = route;
