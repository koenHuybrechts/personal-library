var Router = require('../routers/book'),
  BooksCollection = require('./../collections/books');

module.exports = BookModule = App.module("BookModule", function(BookModule){
  BookModule.addInitializer(function() {
    App.views.book = {};
    App.data.collections.books = new BooksCollection();
  });
  BookModule.on("before:start", function(options){
    App.vent.trigger('app:log', 'BookModule: Before Start');
    new Router();
  });

  BookModule.on("start", function(options) {
    App.data.collections.books.fetch();
  });
});