var express = require("express");
var assert = require("assert");
var bodyParser = require("body-parser"); 

var app = express();
//app.use(bodyParser.json()); 
//app.use(bodyParser.urlencoded({extended:true}));

app.set("PORT", (process.env.PORT || 8010));

app.get("/", function(req,res){

  res.send("Wellcome app");
});

app.listen(app.get("PORT"), function () {
  if (process.env.NODE_ENV !== "production") {
    console.log("app listent on", app.get("PORT"));
  }
});




