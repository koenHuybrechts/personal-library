var config = require('./config/main'),
  pass = require('./config/pass'),
  path = require('path'),
  express = require('express'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  passport = require('passport');

mongoose.connect(config.database);

var app = express();
app.use(express.static(path.join(__dirname, '/../.build')));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'azerty',
  resave: true,
  saveUninitialized: 'true'
}));


app.use(passport.initialize());
app.use(passport.session());




// routes ======================================================================
require('./routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(config.port || 3000);
console.log('The magic happens on port ' + config.port || 3000);