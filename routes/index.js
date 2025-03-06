const express = require("express");
const route = express.Router();

route.get("/", require("../controllers/index"));
route.post("/authentification", require("../controllers/authentification"));

module.exports = route;
