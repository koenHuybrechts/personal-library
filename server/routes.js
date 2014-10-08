var pass = require('./config/pass'),
  search = require('./controllers/search'),
  media = require('./controllers/media'),
  auth = require('./controllers/auth');

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
    console.log(req.user);
    res.send('Authenticated');
  });

  // API endpoints
  app.post('/api/search', search.query);
  app.post('/api/media', media.create);
};