
module.exports = function (app, database) {
  var db = database.db("video"), limit = 25, result = {};
  
  
  // check perfomance on poster query and to avoid skip
  app.get("/videos", function (req, res) {
  
    //res.send(" routes videos");
    
    var page = req.query.page ? req.query.page : 0;
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

      
  });

};
