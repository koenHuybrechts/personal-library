var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

var MeModel = require('./models/me');

module.exports = App = new Backbone.Marionette.Application();

App.addInitializer(function(options) {
  App.vent.trigger('app:log', 'App initialized');
});

App.on("before:start", function(options) {
  App.vent.trigger('app:log', 'Fire before:start');

  var Me = new MeModel();
  Me.fetch();

});

App.on("start", function(options) {
  Backbone.history.start();
});

App.vent.bind('app:log', function(msg) {
  console.log(msg);
});