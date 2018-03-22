var hompePage = require("./routes/homepage.js"),
  videosRoute = require("./routes/videos.js");

module.exports = function (app) {
  videosRoute(app);
  hompePage(app);
  //videosRoute(app);
}; 