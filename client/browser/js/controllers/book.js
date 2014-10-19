var IndexView = require('./../views/book/index'),
  SearchBoxView = require('./../views/book/search_box'),
  LibrariesCollection = require('./../collections/libraries'),
  LibraryModel = require('./../models/library');

module.exports = BookController = {
  index: function() {
    App.vent.trigger('app:log', 'BookController.books');

    App.views.book.index = new IndexView();
    App.views.book.index.render();
    App.views.layout.contentRegion.show(App.views.book.index);

    App.views.book.searchbox = new SearchBoxView();
    App.views.book.searchbox.render();
    App.views.book.index.searchboxRegion.show(App.views.book.searchbox);
  }
};