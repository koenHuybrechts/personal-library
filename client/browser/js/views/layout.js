var mainTemplate = require('../templates/layouts/main.hbs');

module.exports = AppLayoutView = Backbone.Marionette.LayoutView.extend({
  template: mainTemplate,

  regions: {
    menuRegion: '#menu-region',
    contentRegion: '#content-region'
  },
  onRender: function () {
    $("body").prepend(App.views.layout.el);
    App.vent.trigger('app:DomReady');
  }
});