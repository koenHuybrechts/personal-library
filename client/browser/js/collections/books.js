var BookModel = require('../models/book');

module.exports = BooksCollection = Backbone.Collection.extend({
  model: BookModel,
  url: '/api/books',
  search: function(keywords) {
    console.log(keywords);
  }
});