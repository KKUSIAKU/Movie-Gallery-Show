var express = require("express");
var path = require("path");
var rootDirectory = require("../../config.js").rootDirectory;

module.exports = function (app) {
  app.use(express.static(path.resolve(rootDirectory, "docs")));
  app.use(express.static(path.resolve(rootDirectory, "src", "public", "images")));
};
