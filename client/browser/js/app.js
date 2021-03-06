_           = require('underscore');
Backbone    = require('backbone');
Backbone.$  = require('jquery');
jQuery = $  = require('jquery');
Bootstrap = require('./../../../bower_components/bootstrap/dist/js/bootstrap.js');
Marionette  = require('backbone.marionette');

var MeModel = require('./models/me'),
  AppLayoutView = require('./views/layout');

module.exports = App = new Backbone.Marionette.Application();

App.views = {};
App.data = {
  models: {},
  collections: {}
};
App.views.general = {};

App.addInitializer(function(options) {
  App.vent.trigger('app:log', 'App initialized');
});

App.on("before:start", function(options) {
  App.vent.trigger('app:log', 'Fire before:start');

  App.data.models.me = new MeModel();
  App.data.models.me.fetch();

});

App.on("start", function(options) {
  App.views.layout = new AppLayoutView({model: App.data.models.me});
  App.views.layout.render();
});


App.vent.bind('app:DomReady', function () {
  if (Backbone.history){
    Backbone.history.start();
    console.log('history started');
  }
});

App.vent.bind('app:log', function(msg) {
  console.log(msg);
});