var express = require('express');
var userModel = require('./../models/user-model');
var productModel = require('./../models/product-model');
var proTypeModel = require('./../models/protype-model');

var router = express.Router();

router.get('*', function(req, res, next){

	if(req.cookies['username'] != null){
		next();
	}else{
		res.redirect('/login');
	}
});

router.get('/', function(req, res){
	proTypeModel.getAll(function(results){
		var type = {
			result : results
		}
		productModel.getAllP(function(results){
			res.render('homeCustomer/index', {product: results, protype: type.result});
		});
	});
});

module.exports = router;