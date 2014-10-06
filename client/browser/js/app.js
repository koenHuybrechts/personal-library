Backbone    = require('backbone');
Backbone.$  = require('jquery');
Handlebars = require('hbsfy');
Marionette = require('backbone.marionette');

module.exports = App = new Backbone.Marionette.Application();

App.addInitializer(function(options){
  App.vent.trigger('app:log', 'App initialized');
});


App.vent.bind('app:log', function(msg) {
  console.log(msg);
});