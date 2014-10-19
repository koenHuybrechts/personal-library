var searchBoxTemplate = require('./../../templates/book/search_box.hbs'),
  SearchCollection = require('./../../collections/search'),
  SearchResultsView = require('./search_results');

module.exports = SearchBoxView = Backbone.Marionette.ItemView.extend({
  template: searchBoxTemplate,
  className: 'col-lg-12',
  events: {
    'keyup #search-book': 'searchBook'
  },
  initialize: function() {
    App.vent.trigger('app:log', 'BookController.SearchBoxview.Initialized');
    App.vent.bind("search:results", this.showResults, this);
  },
  searchBook: function(event) {
    App.vent.trigger('app:log', 'BookController.Indexview.searchBook');

    var keywords = $(event.currentTarget).val();

    SearchCollection.search(keywords);

  },
  showResults: function(results){
    App.vent.trigger('app:log', results);

    App.views.book.search_results = new SearchResultsView({collection: results});
    App.views.book.search_results.render();
    App.views.book.index.searchresultRegion.show(App.views.book.search_results);
  }
});