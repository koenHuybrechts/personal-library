var   searchItemTemplate = require('./../../templates/book/search_item.hbs');

  ResultItem = Backbone.Marionette.ItemView.extend({
  template: searchItemTemplate,
  tagName: 'li'
});

module.exports = ResultView = Backbone.Marionette.CollectionView.extend({
  childView: ResultItem,
  tagName: 'ul'
});