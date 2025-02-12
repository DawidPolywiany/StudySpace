const express = require("express");
const route = express.Router();

route.get("/", require("../controllers/signup"));

module.exports = route;
