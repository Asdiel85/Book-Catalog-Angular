const express = require("express");
const { errorHandler } = require("../middlewares/errorHandler");
const cors = require("cors");

function expressConfig(app) {
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(errorHandler);
}

module.exports = expressConfig;
