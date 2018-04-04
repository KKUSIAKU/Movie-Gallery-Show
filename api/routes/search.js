
module.exports = function (app, database) {
  var db = database.db("video"), limit = 25, result = {};

  app.get("/videos/search", function (req, res) {
    var query, dateRegx, qYear, dbCursor;

    query = req.query.q ? req.query.q : null;
    dateRegx = /(?:\s|^)(\d{4})(?:\s|$)/;
    qYear = query.match(dateRegx)[0];

    if (qYear !== null) {
      dbCursor = db.collection("movieDetails")
        .find({
          poster: { $ne: null }, year: parseInt(qYear)
        })
        .sort({ _id: -1 }).limit(limit);

      Promise.resolve()
        .then(function getResult() {
          return dbCursor.toArray();
        }).then(function onCursorToArrayFulFilled(data) {
          result.movies = data;
          res.json(data);
        });

    } else {
      // send a more approriate message may be
      res.status(404).send("Not Found! Edit your request");
    }

  });
};
