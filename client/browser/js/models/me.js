var Backbone = require('backbone');

module.exports = MeModel = Backbone.Model.extend({
  url: '/api/me'
});