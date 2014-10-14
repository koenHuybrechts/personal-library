var indexTemplate = require('./../../templates/book/index.hbs');

module.exports = IndexView = Backbone.Marionette.CompositeView.extend({
  template: indexTemplate,
  className: 'col-lg-12',
  events: {
    'keyup #search-book': 'searchBook'
  },
  initialize: function() {
    App.vent.trigger('app:log', 'BookController.Indexview.Initialized');
  },
  searchBook: function(event) {
    App.vent.trigger('app:log', 'BookController.Indexview.searchBook');

    var keywords = $(event.currentTarget).val();

    App.data.collections.books.search(keywords);

  }
});