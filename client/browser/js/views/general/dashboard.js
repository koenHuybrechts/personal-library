var dashboardTemplate = require('./../../templates/general/dashboard.hbs');

module.exports = AppLayoutView = Backbone.Marionette.CompositeView.extend({
  template: dashboardTemplate
});