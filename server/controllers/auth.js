var passport = require('passport')
  User = require('../models/user');

module.exports = {
  register: {
    process: function(req, res) {
      User.register(
          new User({ username : req.body.username }),
          req.body.password, function(err, user) {
        if (err) {
          console.log(err);
          res.sendFile('register.html', {root: '.build'});
        }

        console.log('user: ' + user.username + " saved.");
        req.login(user, function(err) {
          if (err) {
            console.log(err);
          }
          return res.redirect('/');
        });
      });
    },
    view: function(req, res, next){
      res.sendFile('register.html', {root: '.build'});
    }
  },
  login: {
    process: function(req, res, next) {
      console.log('login:process');

      passport.authenticate('local', function(err, user, info) {
        console.log(err);
        console.log(user);
        console.log(info);
        if (err) { return next(err) }
        if (!user) {
          req.session.messages =  [info.message];
          return res.redirect('/login')
        }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.redirect('/');
        });
      })(req, res, next);
    }
  }
};