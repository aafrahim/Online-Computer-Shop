var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();

router.get('/', function(req, res){
	if(req.cookies['username'] == null){
		res.render('login/index');
	 }else{
	 	res.redirect('/homeAdmin');
	 }
});

router.post('/', function(req, res){
	
	var user = {
		username: req.body.username,
		password: req.body.password
	}

	userModel.validate(user, function(result){
		
		if(result.utype == 0){
			req.session.username = req.body.username;
			req.session.type = req.body.utype;
			res.cookie('username', req.body.username); //cookie create
			res.redirect('/homeAdmin');
		}else if(result.utype == 1){
			req.session.username = req.body.username;
			req.session.type = req.body.usertype;
			res.cookie('username', req.body.uname); //cookie create
			res.redirect('/homeCustomer');
		}
		else{
			res.send('invalid username/password');
		}
	});

});

module.exports = router;


