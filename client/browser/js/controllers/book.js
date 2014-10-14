var IndexView = require('./../views/book/index'),
  LibrariesCollection = require('./../collections/libraries'),
  LibraryModel = require('./../models/library');

module.exports = BookController = {
  index: function() {
    App.vent.trigger('app:log', 'BookController.books');

    App.views.book.index = new IndexView();
    App.views.book.index.render();
    App.views.layout.contentRegion.show(App.views.book.index);
  }
};