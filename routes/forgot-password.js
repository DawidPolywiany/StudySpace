const express = require("express");
const route = express.Router();

route.get("/", require("../controllers/forgot-password"));

module.exports = route;
