const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload');

const indexRouter = require('./routes/index');
const imagesRouter = require('./routes/images');

//instancias das rotas de usuário
const usuariosRouter = require('./routes/usuarios/usuarios');
const cadastroUsuariosRouter = require('./routes/usuarios/cadastro');
const saveUsuariosRouter = require('./routes/usuarios/save');
const editUsuariosRouter = require('./routes/usuarios/edit');
const listUsuariosRouter = require('./routes/usuarios/list');
const updateUsuariosRouter = require('./routes/usuarios/update');
const trashUsuariosRouter = require('./routes/usuarios/trash');
const loginUsuariosRouter = require('./routes/usuarios/login');
const checkUsuariosRouter = require('./routes/usuarios/checklogin');

//instancia das rotas de cores
const coresRouter = require('./routes/cores/cores');
const cadastroCoresRouter = require('./routes/cores/cadastro');
const saveCoresRouter = require('./routes/cores/save');
const editCoresRouter = require('./routes/cores/edit');
const listCoresRouter = require('./routes/cores/list');
const updateCoresRouter = require('./routes/cores/update');
const trashCoresRouter = require('./routes/cores/trash');

//instancias das rotas de marcas
const marcasRouter = require('./routes/marcas/marcas');
const cadastroMarcasRouter = require('./routes/marcas/cadastro');
const saveMarcasRouter = require('./routes/marcas/save');
const editMarcasRouter = require('./routes/marcas/edit');
const listMarcasRouter = require('./routes/marcas/list');
const updateMarcasRouter = require('./routes/marcas/update');
const trashMarcasRouter = require('./routes/marcas/trash');

//instancias das rotas de veiculos
const veiculosRouter = require('./routes/veiculos/veiculos');
const cadastroVeiculosRouter = require('./routes/veiculos/cadastro');
const saveVeiculosRouter = require('./routes/veiculos/save');
const editVeiculosRouter = require('./routes/veiculos/edit');
const listVeiculosRouter = require('./routes/veiculos/list');
const updateVeiculosRouter = require('./routes/veiculos/update');
const trashVeiculosRouter = require('./routes/veiculos/trash');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

app.use('/static',express.static(path.resolve('./public')));
app.use('/static',express.static(path.resolve('./node_modules/bootstrap')));
app.use('/static',express.static(path.resolve('./node_modules/@popperjs/core')));
app.use('/static',express.static(path.resolve('./node_modules/@fortawesome/fontawesome-free')));

app.use('/', indexRouter);
app.use('/images', imagesRouter);

//uso das rotas de usuarios
app.use('/usuarios', usuariosRouter);
app.use('/cadastro-usuarios', cadastroUsuariosRouter);
app.use('/save-usuarios', saveUsuariosRouter);
app.use('/edit-usuarios', editUsuariosRouter);
app.use('/list-usuarios', listUsuariosRouter);
app.use('/update-usuarios', updateUsuariosRouter);
app.use('/trash-usuarios', trashUsuariosRouter);
app.use('/login', loginUsuariosRouter);
app.use('/check-login', checkUsuariosRouter);

//uso das rotas de cores
app.use('/cores', coresRouter);
app.use('/cadastro-cores', cadastroCoresRouter);
app.use('/save-cores', saveCoresRouter);
app.use('/edit-cores', editCoresRouter);
app.use('/list-cores', listCoresRouter);
app.use('/update-cores', updateCoresRouter);
app.use('/trash-cores', trashCoresRouter);

//uso das rotas de marcas
app.use('/marcas', marcasRouter);
app.use('/cadastro-marcas', cadastroMarcasRouter);
app.use('/save-marcas', saveMarcasRouter);
app.use('/edit-marcas', editMarcasRouter);
app.use('/list-marcas', listMarcasRouter);
app.use('/update-marcas', updateMarcasRouter);
app.use('/trash-marcas', trashMarcasRouter);

//uso das rotas de veiculos
app.use('/veiculos', veiculosRouter);
app.use('/cadastro-veiculos', cadastroVeiculosRouter);
app.use('/save-veiculos', saveVeiculosRouter);
app.use('/edit-veiculos', editVeiculosRouter);
app.use('/list-veiculos', listVeiculosRouter);
app.use('/update-veiculos', updateVeiculosRouter);
app.use('/trash-veiculos', trashVeiculosRouter);

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
