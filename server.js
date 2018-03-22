var express = require("express"),
  path = require("path"),
  assert = require("assert"),
  bodyParser = require("body-parser");

var app = express();
//app.use(bodyParser.json()); 
//app.use(bodyParser.urlencoded({extended:true}));

app.set("PORT", (process.env.PORT || 8010));

app.use(express.static(path.resolve(__dirname, "docs")));


/*app.get("/", function (req, res) {

  //app.use(express.static(path.resolve(__dirname, "docs")));
  res.send("hello app")
});*/

app.listen(app.get("PORT"), function () {
  if (process.env.NODE_ENV !== "production") {
    console.log("app listent on", app.get("PORT"));
  }
});




