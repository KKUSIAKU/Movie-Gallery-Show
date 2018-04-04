
module.exports = function (app, database) {

  app.get("/videos", function (req, res) {
    var db, page, cursor, limit = 25, result = {};

    try {
      db = database.db("video");
      page = req.query.page ? req.query.page : 0;

      cursor = db.collection("movieDetails")
        .find({ poster: { $ne: null } },
          { _id: 0, title: 1, poster: 1, genres: 1, plot: 1, year: 1 })
        .skip(limit * (parseInt(page))).sort({ _id: -1 }).limit(limit);

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
          // set error message
          res.send(`error ${err.message}`);
        });
    }
    catch (e) {
      // need to check consistency with promise catch above
      res.send(`error ${e.message}`);
    } 
  });
};
