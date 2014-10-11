var pass = require('./config/pass'),
  search = require('./controllers/search'),
  media = require('./controllers/media'),
  auth = require('./controllers/auth'),
  person = require('./controllers/person'),
library = require('./controllers/library');

module.exports = function(app, passport) {

  app.get('/app', pass.ensureAuthenticated, function(req, res) {
    res.sendFile('app.html', {root: '.build'});
  });

  app.get('/auth', function(req, res) {
    res.sendFile('login.html', {root: '.build'});
  });

  app.post('/auth', passport.authenticate('local'), function(req, res) {
    res.redirect('/app');
  });

  app.get('/register' , auth.register.view);
  app.post('/register', auth.register.process);

  app.get('/account', pass.ensureAuthenticated, function(req, res, next) {
    res.send('Authenticated');
  });

  // API endpoints
  app.post('/api/search', search.query);
  app.post('/api/media', media.create);
  app.get('/api/me', person.me);

  // API Library
  app.get('/api/libraries', library.list);
  app.post('/api/libraries', library.create);
  app.post('/api/library', library.create);
};