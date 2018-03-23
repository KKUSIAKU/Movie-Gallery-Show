var hompePage = require("./routes/homepage.js"),
  videosRoute = require("./routes/videos.js");

module.exports = function (app,database) {
  videosRoute(app,database);
  hompePage(app);
  //videosRoute(app);
}; 