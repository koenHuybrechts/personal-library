var pass = require('./config/pass'),
  search = require('./controllers/search'),
  media = require('./controllers/media'),
  auth = require('./controllers/auth');

module.exports = function(app, passport) {
  // show the home page (will also have our login links)
  app.get('/', function(req, res) {
    console.log(req.user);

    res.sendFile('index.html', {root: '.build'});
  });

  app.get('/auth', function(req, res) {
    res.sendFile('login.html', {root: '.build'});
  });

  app.get('/loginSuccess' , function(req, res, next){
    res.send('Successfully authenticated');
  });

  app.post('/auth', passport.authenticate('local'), function(req, res) {
    res.redirect('/account');
  });


  app.get('/register' , auth.register.view);
  app.post('/register', auth.register.process);

  app.get('/account', function(req, res, next) {
    console.log(req.user);
    res.send('Authenticated');
  });

  // API endpoints
  app.post('/api/search', search.query);
  app.post('/api/media', media.create);
};