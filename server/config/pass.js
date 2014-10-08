var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , User = require('./../models/user');


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Simple route middleware to ensure user is authenticated.  Otherwise send to login page.
exports.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
  console.log('in functie');
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/auth');
};


// Check for admin middleware, this is unrelated to passport.js
// You can delete this if you use different method to check for admins or don't need admins
exports.ensureAdmin = function ensureAdmin(req, res, next) {
  console.log(req.user);
  if(req.user && req.user.admin === true)
    next();
  else
    res.send(403);
};