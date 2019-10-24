var express = require('express');
var userModel = require('./../models/user-model');
var productModel = require('./../models/product-model');
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


// router.get('/addemp', function(req, res){
// 	res.render('user/addemp');
// });

// router.post('/addemp', function(req, res){

// 	var user = {
// 		name: req.body.name,
// 		cname: req.body.cname,
// 		uname: req.body.uname,
// 		password: req.body.password,
// 		contact: req.body.contact,
// 		utype: 1
// 	};

// 	userModel.insert(user, function(status){
// 		if(status){
// 			res.redirect('/user/userlist');
// 		}else{
// 			res.redirect('/user/addemp');
// 		}
// 	});
// });

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
