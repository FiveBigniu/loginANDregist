var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var session = require('express-session');
var router = express.Router();

var index = require('./routes/index');
var register = require('./routes/register');
var login = require('./routes/login');
var home = require('./routes/home');

var app = express();

app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.engine('html', ejs.__express); 
app.set('view engine', 'html');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.post('/login', login); 
app.post('/register', register); 
app.get('/registPage', register); 
app.use('/home', index);
app.post("/contact", home);

// router.post('/register', function(req, res, next){
//   console.log('router enter');
//   req.query['age'] = '19';
//   next();
// });

// app.post('/register', function(req, res){
//   console.log(req.query);
//   res.send('ok');
// });

module.exports = app;
// log4js.configure({
//  appenders: [
//    { type: 'console' },
//    { type: 'file', filename: 'cheese.log', category: 'cheese' }
//   ]
// });
// app.use(log4js.connectLogger(log4js.getLogger("cheese"), {level: log4js.levels.INFO}));//使用log4作爲日志打印中間件

// app.use(session({
//     secret: 'some wierd words',
//     cookie: {
//         maxAge: 6 * 60 * 60 * 1000
//     },
//     rolling: true,
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(function(req,res,next){ 
//     res.locals.user = req.session.user;   // 从session 获取 user对象
//     var err = req.session.error;   //获取错误信息
//     delete req.session.error;
//     res.locals.message = "";   // 展示的信息 message
//     if(err){ 
//         res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:red;">'+err+'</div>';
//     }
//     next();  //中间件传递
// });
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



