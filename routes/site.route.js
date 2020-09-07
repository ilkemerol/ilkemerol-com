const express = require("express");
const router = express.Router();
const path = require("path");
const requestIp = require("request-ip");
const logger = require("../utils/logger");

router.get("/", (req, res, next) => {
  logger.doit(requestIp.getClientIp(req) + " entering into the space!");
  res.sendFile(path.resolve("views/index.html"));
});

module.exports = router;
