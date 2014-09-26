var config = require('./config'),
  express = require('express'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  morgan = require('morgan');


var app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'azerty',
  resave: true,
  saveUninitialized: 'true'
}));


// routes ======================================================================
require('./routes.js')(app); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(config.port || 3000);
console.log('The magic happens on port ' + config.port || 3000);