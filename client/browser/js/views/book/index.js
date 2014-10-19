var indexTemplate = require('./../../templates/book/index.hbs');

module.exports = IndexView = Backbone.Marionette.LayoutView.extend({
  template: indexTemplate,
  regions: {
    searchboxRegion: "#search-box",
    searchresultRegion: "#search-results"
  },
  initialize: function() {
    App.vent.trigger('app:log', 'BookController.Indexview.Initialized');
  }
});