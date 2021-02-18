var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var expressHbs=require('express-handlebars');
var PORT = process.env.PORT || 4500;

//CONFIGURACION DE HANDLEBARS COMO MOTOR DE PLANTILLAS 
app.engine('hbs', expressHbs({defaultLayout: 'base', extname:'hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));

//MIDDLEWARES
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.static('views/images')); 

//ENRUTADORES
var indexRouter = require('./routes/index');
var dashboardRouter = require('./routes/dashboard');
var monitorsRouter = require('./routes/monitors');
var itemsRouter = require('./routes/items');
var printersRouter = require('./routes/printers');
var laptopsRouter = require('./routes/laptops');

const router = require('./routes/index');
const dashboard = require('./routes/dashboard');
const monitors = require('./routes/monitors');
const printers = require('./routes/printers');
const laptops = require('./routes/laptops');
const items = require('./database/queries/items');

// const bodyParser = require('body-parser');
app.use('/index', indexRouter);
app.use('/items', itemsRouter);
app.use('/dashboard', dashboardRouter);
app.use('/monitors', monitorsRouter);
app.use('/printers', printersRouter);
app.use('/laptops', laptopsRouter);
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})