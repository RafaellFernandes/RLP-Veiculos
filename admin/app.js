const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const cadastroRouter = require('./routes/usuarios/cadastro');
const coresRouter = require('./routes/cores/addcores');
const marcasRouter = require('./routes/marcas/addmarcas');
const veiculosRouter = require('./routes/veiculos/addveiculos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/static',express.static(path.resolve('./public')));
app.use('/static',express.static(path.resolve('./node_modules/bootstrap')));
app.use('/static',express.static(path.resolve('./node_modules/@popperjs/core')));
app.use('/static',express.static(path.resolve('./node_modules/@fortawesome/fontawesome-free')));

app.use('/', indexRouter);
app.use('/cadastro', cadastroRouter);
app.use('/cores', coresRouter);
app.use('/marcas', marcasRouter);
app.use('/veiculos', veiculosRouter);

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
