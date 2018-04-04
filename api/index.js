var hompePage = require("./routes/homepage.js"),
  videosRoute = require("./routes/videos.js"),
  searchRoute = require("./routes/search");

module.exports = function (app, database) {
  videosRoute(app, database);
  searchRoute(app, database);
  hompePage(app);
}; 