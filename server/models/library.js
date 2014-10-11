var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var LibrarySchema = new mongoose.Schema({
  name: String,
  user: { type: ObjectId, ref: 'User'},
  status: String
});

module.exports = LibraryModel = mongoose.model('Library', LibrarySchema);