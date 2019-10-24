//DECLARATION
var express  	= require('express');
var ejs  		= require('ejs');
var bodyParse  	= require('body-parser');
var exSession  	= require('express-session');
var cookieParser= require('cookie-parser');
 var homeAdmin  = require('./controllers/homeAdmin');
 var homeCustomer  = require('./controllers/homeCustomer');
 //var user  		= require('./controllers/user');
 var login  	= require('./controllers/login');
 var logout  	= require('./controllers/logout');
 var registration  	= require('./controllers/registration');
var app 		= express();

//CONGIFURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParse.urlencoded({extended:false}));
app.use(exSession({secret:"my top secret value", saveUninitialized:true, resave:false}));
app.use(cookieParser());
app.use('/homeAdmin', homeAdmin);
app.use('/homeCustomer', homeCustomer);
app.use('/registration', registration);
//app.use('/user', user);
app.use('/login', login);
app.use('/logout', logout);

//ROUTING
app.get('/', function(req, res){
	res.redirect('/login');
});


//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});
