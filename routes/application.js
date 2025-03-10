const express = require("express");
const route = express.Router();

route.get("/", require("../controllers/application"));
route.post("/get-info", require("../get-info"));

module.exports = route;
