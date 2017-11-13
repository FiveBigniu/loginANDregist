var index = require('./index');
var register = require('./register');
var login = require('./login');
var home = require('./home');
var squareList = require('./squareList');

var r = function(app){
	app.use('/', index);
	app.post('/login', login); 
	app.post('/register', register); 
	app.get('/registPage', register); 
	app.use('/home', index);
	app.post("/contact", home);	
	app.get("/getSquareList", squareList);	
	app.post("/setSquareList", squareList);
	app.post("/setLike", squareList);
}


module.exports = r;