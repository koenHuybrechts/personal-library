module.exports = LibraryModel = Backbone.Model.extend({
  url: '/api/library',
  defaults: {
    name: 'Personal',
    status: 'active'
  }
});