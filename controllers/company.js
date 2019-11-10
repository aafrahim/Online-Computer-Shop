var express = require('express');
var userModel = require('./../models/user-model');
var productModel = require('./../models/product-model');
var proTypeModel = require('./../models/protype-model');
var proSubTypeModel = require('./../models/prosubtype-model');
var companyModel = require('./../models/company-model');
var router = express.Router();

router.get('*', function(req, res, next){

	if(req.cookies['username'] != null){
		next();
	}else{
		res.redirect('/login');
	}
});

router.get('/:name', function(req, res){
		productModel.getAllbyCompany(req.params.name, function(results){
			res.render('company/index', {product: results});
		});
});

module.exports = router;
