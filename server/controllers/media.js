var mediaModel = require('../models/media');

exports.create = function(req, res) {
    var mediaItem = new mediaModel(req.body);
    mediaItem.save(function(err, media) {
      if (err) {
        console.error(err);
        res.status(409).end();
      }

      res.status(200).end();
    });
};