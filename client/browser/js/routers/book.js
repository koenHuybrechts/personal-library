var Controller = require('../controllers/book');

module.exports = BookRouter = Marionette.AppRouter.extend({
  controller: Controller,
  appRoutes: {
    "books": "index"
  }
});