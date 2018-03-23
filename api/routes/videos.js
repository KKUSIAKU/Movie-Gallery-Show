
module.exports = function (app, database) {

  // check perfomance on poster query and to avoid skip
  app.get("/videos", function (req, res) {
    var db, page, cursor, limit = 25, result = {};

    try {
      db = database.db("video");
      page = req.query.page ? req.query.page : 0;

      cursor = db.collection("movieDetails")
        .find({ poster: { $ne: null } },
          { _id: 0, title: 1, poster: 1, genres: 1, plot: 1, year: 1 })
        .skip(limit * (parseInt(page))).sort({ _id: -1 }).limit(limit);

      // put count and getGenres in parrallel operations
      cursor.count(false)
        .then(function onCountFulfilled(data) {
          result.numberOfResult = data;
        })
        .then(function onCountFinished() {
          return cursor.toArray();
        })
        .then(function onCursorToArrayFulFilled(data) {
          result.movies = data;
          result.page = page;
          res.jsonp(result);
          res.send(" Hello from videos routes");
        })

        .catch(function onCursorError(err) {
          res.send(`error ${err.message}`);
          //console.log("error in movies fetching promise chain", err.message);
        });
    }
    catch (e) {
      res.send(`error ${e.message}  ${database}`);
    }

   






    // 

    //var db = database.db("video"), limit = 25, result = {};
    //res.send(" routes videos");

    //var page = req.query.page ? req.query.page : 0;
    /*
    var cursor = db.collection("movieDetails")
      .find({ poster: { $ne: null } },
        { _id: 0, title: 1, poster: 1, genres: 1, plot: 1, year: 1 })
      .skip(limit * (parseInt(page))).sort({ _id: -1 }).limit(limit);

    // put count and getGenres in parrallel operations
    cursor.count(false)
      .then(function onCountFulfilled(data) {
        result.numberOfResult = data;
      })
      .then(function onCountFinished() {
        return cursor.toArray();
      })
      .then(function onCursorToArrayFulFilled(data) {
        result.movies = data;
        result.page = page;
        res.json(result);
      })
     
      .catch(function onCursorError(err) {
        console.log("error in movies fetching promise chain", err.message);
      });
      */
    //res.send(" routes videos");

  });

};
