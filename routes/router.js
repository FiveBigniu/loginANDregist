var index = require('./index');
var register = require('./register');
var login = require('./login');
var home = require('./home');

var r = function(app){
	app.use('/', index);
	app.post('/login', login); 
	app.post('/register', register); 
	app.get('/registPage', register); 
	app.use('/home', index);
	app.post("/contact", home);	
}


module.exports = r;