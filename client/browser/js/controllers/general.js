var DashboardView = require('./../views/general/dashboard');

module.exports = GeneralController = {
  dashboard: function() {
    App.vent.trigger('app:log', 'GeneralController.dashboard');
  }
};