var google = require('googleapis');
var books = google.books('v1');

module.exports = {
  query: function(req, res) {

    var params = { q: req.query.q };

    books.volumes.list(params, function (err, response) {
      res.send(response);
    });

  }
};