var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var logger = require('morgan');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var indexRouter = require('./routes/index');



const mongoose = require('mongoose');

var app = express();

var mongodbUri = 'mongodb+srv://@cluster0-yxjsz.mongodb.net/usersdb';
mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    auth: {
        user: 'test',
        password: 'test'
    }
});


const mongooseConnection = mongoose.connection;
mongooseConnection.on('error', console.error.bind(console, 'connection error:'));

mongooseConnection.once('open', () => {
    console.log('connected to a database')
});

// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views')
app.set(express.static(path.join(__dirname,'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(flash());

app.use(session ({
  secret: 'social media',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
        mongooseConnection: mongooseConnection
    })
}))





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
