var search = require('./controllers/search'),
  media = require('./controllers/media');
module.exports = function(app, passport) {
  // show the home page (will also have our login links)
  app.get('/', function(req, res) {
    res.send('Hello World');
  });

  app.post('/api/search', search.query);
  app.post('/api/media', media.create);
};