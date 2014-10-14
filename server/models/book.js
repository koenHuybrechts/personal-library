var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId,
  uniqueValidator = require('mongoose-unique-validator');

var BookSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true
  },
  status: String
});

BookSchema.plugin(uniqueValidator);

module.exports = BookSchema = mongoose.model('Book', BookSchema);