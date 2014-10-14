var indexTemplate = require('./../../templates/book/index.hbs');

module.exports = IndexView = Backbone.Marionette.CompositeView.extend({
  template: indexTemplate
});