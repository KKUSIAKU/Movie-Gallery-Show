var express = require("express"),
  path = require("path"),
  assert = require("assert"),
  bodyParser = require("body-parser");

var app = express();
//app.use(bodyParser.json()); 
//app.use(bodyParser.urlencoded({extended:true}));

app.set("PORT", (process.env.PORT || 8010));

//app.use(express.static(path.resolve(__dirname, "docs")));

//require("./api")(app);

app.get("/",function(req,res){
  var port = process.env;
  res.send(port);
})

app.listen(app.get("PORT"), function () {
  if (process.env.NODE_ENV !== "production") {
    console.log("app listent on", app.get("PORT"));
  }
});




