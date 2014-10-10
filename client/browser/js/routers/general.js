var Controller = require('../controllers/general');

module.exports = GeneralRouter = Marionette.AppRouter.extend({
  controller: Controller,
  appRoutes: {
    "": "dashboard"
  }
});