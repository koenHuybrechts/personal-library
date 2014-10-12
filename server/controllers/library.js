var LibraryModel = require('./../models/library');

module.exports = {
  //Return list of all libraries
  list: function(req, res) {
    LibraryModel.find({}, function(err, libraries) {
        if (err) return next(err);
        res.send(libraries);
      }
    );
  },
  //Create new library
  create: function(req, res) {
    var library = new LibraryModel(req.body);
    library.save(function(err) {
      if (err) return next(err);

      res.send(library);
    });
  }
};