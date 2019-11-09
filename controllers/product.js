var express = require('express');
var userModel = require('./../models/user-model');
var productModel = require('./../models/product-model');
var proSubTypeModel = require('./../models/prosubtype-model');
var router = express.Router();

router.get('*', function(req, res, next){

	if(req.cookies['username'] != null){
		next();
	}else{
		res.redirect('/login');
	}
});

router.get('/productlist', function(req, res){
		productModel.getAllP(function(results){
			res.render('product/index', {product: results});
		});
});


router.get('/add', function(req, res){
	res.render('product/add');
});

router.post('/add', function(req, res){

	var product = {
		name: req.body.name,
		type: req.body.type,
		subtype: req.body.subtype,
		company: req.body.company
	};

	productModel.insert(product, function(status){
		if(status){
			res.redirect('/product/productlist');
		}else{
			res.redirect('/product/add');
		}
	});
});

router.get('/edit/:id', function(req, res){

	productModel.getById(req.params.id, function(results){
		res.render('product/edit', {product: results});		
	});

});

router.post('/edit/:id', function(req, res){

	var product = {
		id: req.params.id,
		name: req.body.name,
		type: req.body.type,
		subtype: req.body.subtype,
		company: req.body.company
	};

	productModel.update(product, function(status){

		if(status){
			res.redirect('/product/productlist');
		}else{
			res.redirect('/product/edit/:req.params.id');
		}
	});
});

router.get('/:productName', function(req, res){
	productModel.getAllByTypeName(req.params.productName, function(results){
		var product = {
			result : results
		}
		proSubTypeModel.getAllByType(req.params.productName, function(results){
			res.render('product/categorylist', {prosubtype: results, product: product.result});
		});	
	});

});

router.get('/delete/:id', function(req, res){

	var product ={id: req.params.id}

	productModel.delete(product, function(status){
		res.redirect('/product/productlist');;		
	});

});

// router.get('/details/:id', function(req, res){

// 	userModel.getById(req.params.id, function(result){
// 		console.log(result);
// 		res.render('user/details', {user: result});
// 	});
// });

module.exports = router;
