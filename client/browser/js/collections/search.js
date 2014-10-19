var BookModel = require('../models/book');

module.exports = SearchCollection = Backbone.Collection.extend({
  model: BookModel,
  url: function(){
    console.log(this.keywords);

    return '/api/search?q=' + this.keywords;
  },
  parse: function(response) {
    this.totalItems = response.totalItems;
    return response.items;
  }
}, {
  search: function(keywords) {
    App.vent.trigger('app:log', 'SearchCollection.Search');

    var results = new SearchCollection();
    results.keywords = keywords;
    results.fetch({
      success: function(){
        App.vent.trigger("search:results", results);
      },
      error: function(collection, response){
        App.vent.trigger("search:error", response);
      }
    });
  }
});