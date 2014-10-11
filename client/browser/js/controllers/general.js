var DashboardView = require('./../views/general/dashboard'),
  LibrariesCollection = require('./../collections/libraries'),
  LibraryModel = require('./../models/library');

module.exports = GeneralController = {
  dashboard: function() {
    App.vent.trigger('app:log', 'GeneralController.dashboard');

    App.data.collections.libraries = new LibrariesCollection();
    App.data.collections.libraries.fetch({
      success: function(libraries) {
        console.log(libraries.length);
        if(libraries.length === 0) {
          App.vent.trigger('app:log', 'GeneralController: No libraries present');
          var library = new LibraryModel();
          library.save({
            success: function() {
              console.log(this);
              App.data.collections.libraries.add(library);
            }
          });

        }
      }
    });
  }
};