const express = require("express");
const route = express.Router();

route.get("/", require("../controllers/index"));

module.exports = route;
