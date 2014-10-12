var DashboardView = require('./../views/general/dashboard'),
  LibrariesCollection = require('./../collections/libraries'),
  LibraryModel = require('./../models/library');

module.exports = GeneralController = {
  dashboard: function() {
    App.vent.trigger('app:log', 'GeneralController.dashboard');

    App.data.collections.libraries = new LibrariesCollection();
    App.data.collections.libraries.fetch({
      success: function(libraries) {
        if(libraries.length === 0) {
          App.vent.trigger('app:log', 'GeneralController: No libraries present');
          var library = new LibraryModel();
          library.save({
            success: function() {
              App.data.collections.libraries.add(library);

              App.views.general.dashboard = new DashboardView({model: App.data.collections.libraries});

              App.views.general.render();
              App.views.layout.menuRegion.empty();

              App.views.layout.contentRegion.show(App.views.general);
            }
          });

        }
      }
    });
  }
};