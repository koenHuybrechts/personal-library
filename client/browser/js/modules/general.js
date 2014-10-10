var Router = require('../routers/general');

module.exports = GeneralModule = App.module("GeneralModule", function(GeneralModule){
  GeneralModule.on("before:start", function(options){
    App.vent.trigger('app:log', 'GeneralModule: Before Start');
    new Router();
  });
});