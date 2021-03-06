var express = require("express"),
  path = require("path"),
  assert = require("assert"),
  bodyParser = require("body-parser"),
  MongoClient = require("mongodb").MongoClient;;

var app = express(),
  uri = process.env.MGDB_ACCES_URI;
//app.use(bodyParser.json()); 
//app.use(bodyParser.urlencoded({extended:true}));

app.set("PORT", (process.env.PORT || 8010));

//app.use(express.static(path.resolve(__dirname, "docs")));

//require("./api")(app);


MongoClient.connect(uri, function (err, database) {
  
  assert.equal(null, err);
  assert.ok(database);

  require("./api")(app, database); 

  app.listen(app.get("PORT"), function () {
    if (process.env.NODE_ENV !== "production") {
      console.log("app listent on", app.get("PORT"));
    }
  });
  
});

/*
app.get("/", function (req, res) {
  var port = process.env;
  res.send(port);
})

app.listen(app.get("PORT"), function () {
  if (process.env.NODE_ENV !== "production") {
    console.log("app listent on", app.get("PORT"));
  }
});
*/



