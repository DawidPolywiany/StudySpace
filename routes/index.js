const express = require("express");
const route = express.Router();
const _index_controller = require("../controllers/index");

route.get("/", _index_controller);

module.exports = route;
