var BookModel = require('../models/book');

module.exports = BooksCollection = Backbone.Collection.extend({
  model: BookModel,
  url: function(){
    var url = '/api/books';

    console.log(this.keywords);

    if(typeof this.keywords !== 'undefined') {
      url + '/' + this.keywords;
    }
    return url;
  }
}, {
  search: function(keywords) {
    var results = new BooksCollection();
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