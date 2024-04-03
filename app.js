var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
var db = mongoose.connection; 
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');
const gridRouter = require('./routes/grid');
const randomitemRouter = require('./routes/pick');
var bookRouter = require("./models/book");
const resourceRouter = require("./routes/resource");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/grid', gridRouter);
app.use('/randomitem', randomitemRouter);
app.use('/book', bookRouter);
app.use('/resource', resourceRouter)
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
// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
const book = require("./models/book");
  await book.deleteMany();
  let instance1 = new
    book({
      book_title: "Alone", book_author: 'Megan E. Freeman',
      book_rating: 4.6
    });
  instance1.save().then(doc => {
    console.log("First object saved")
  }
  ).catch(err => {
    console.error(err)
  });
  let instance2 = new
    book({
      book_title: "1984", book_author: 'George Orwell',
      book_rating: 4.7
    });
  instance2.save().then(doc => {
    console.log("First object saved")
  }
  ).catch(err => {
    console.error(err)
  });
  let instance3 = new
  book({
    book_title: "The Alchemist", book_author: 'Paulo Coelho',
    book_rating: 4.6
  });
  instance3.save().then(doc => {
    console.log("First object saved")
  }
  ).catch(err => {
    console.error(err)
  });
}
let reseed = true;
if (reseed) {recreateDB();}


module.exports = app;
