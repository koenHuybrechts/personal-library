var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId,
  uniqueValidator = require('mongoose-unique-validator'),
  passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String
});

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(uniqueValidator);

module.exports = UserModel = mongoose.model('User', UserSchema);