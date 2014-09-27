var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId,
  uniqueValidator = require('mongoose-unique-validator');

var MediaSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true
  },
  status: String
});

MediaSchema.plugin(uniqueValidator);

module.exports = MediaModel = mongoose.model('Media', MediaSchema);