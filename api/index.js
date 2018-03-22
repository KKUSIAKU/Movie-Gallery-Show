var hompePage = require("./routes/homepage.js"),
  videosRoute = require("/routes/videosjs");

module.exports = function (app, database){
  hompePage(app); 
  videosRoute(app,database);
}; 