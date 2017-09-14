var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cors = require('cors')
 
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var admin = require('./routes/admin');
var error = require('./routes/error');
var users = require('./routes/users');
var apiCalls = require('./routes/apiCalls');
var payment = require('./routes/payments/payments');

var app = express();

app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// 
// var http = require('http'),
//     fs = require('fs'),
//     ccav = require('./routes/payments/ccavutil'),
//     qs = require('querystring'),
//     ccavReqHandler = require('./routes/payments/ccavRequestHandler'),
//     ccavResHandler = require('./routes/payments/ccavResponseHandler');

// app.post('/ccavRequestHandler', function (request, response){
// 	ccavReqHandler.postReq(request, response);
// });


// app.post('/ccavResponseHandler', function (request, response){
//     ccavResHandler.postRes(request, response);
// });



app.use(cors())
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
var apiCall = app.use('/api', apiCalls);
var admin = app.use('/admin', admin);
var errorPage = app.use('/notfound', error);
var payment = app.use('/payment', payment);
var pageRequest = app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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