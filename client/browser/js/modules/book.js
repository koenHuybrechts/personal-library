var Router = require('../routers/book');

module.exports = BookModule = App.module("BookModule", function(BookModule){
  BookModule.addInitializer(function() {
    App.views.book = {};
  });
  BookModule.on("before:start", function(options){
    App.vent.trigger('app:log', 'BookModule: Before Start');
    new Router();
  });
});