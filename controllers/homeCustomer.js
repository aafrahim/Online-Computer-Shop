var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();

router.get('/', function(req, res){
	res.render('homeCustomer/index');
});

module.exports = router;