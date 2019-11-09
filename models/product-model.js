var db = require('./db');

module.exports={

	getById: function(id, callback){

		var sql = "select * from productinfo where id=?";
		db.getResults(sql, [id], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	// validates: function(user, callback){
	// 	var sql = "select * from userinfo where username=? and password=?";

	// 	db.getResults(sql, [user.uname, user.password], function(result){

	// 		if(result.length > 0 ) {
	// 			callback(true);
	// 		}else{
	// 			callback(false);
	// 		}
	// 	});
	// },
	// validate: function(user, callback){
	// 	var sql = "select * from userinfo where username=? and password=?";

	// 	db.getResults(sql, [user.username, user.password], function(result){

	// 		console.log(result);

	// 		if(result.length > 0 ) {
	// 			callback(result[0]);
	// 		}else{
	// 			callback([]);
	// 		}
	// 	});
	// },
	getAllP : function(callback){
		var sql = "select * from productinfo";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	getAllByTypeName : function(type, callback){
		var sql = "select * from productinfo where type =?";

		db.getResults(sql, [type], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	getAllBySubTypeName : function(subtype, callback){
		var sql = "select * from productinfo where subtype =?";

		db.getResults(sql, [subtype], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert : function(product, callback){
		var sql = "insert into productinfo values('', ?, ?, ?, ?, ?, ?, ?)";
		db.execute(sql, [product.name, product.type, product.subtype, product.image, product.company, product.description, product.price], function(status){
			callback(status);
		});
	},
	update : function(product, callback){
		var sql = "update productinfo set name=?, type= ?, subtype=?, company=? where id=?";		
			db.execute(sql, [product.name, product.type, product.subtype, product.company, product.id], function(status){
				callback(status);
			});
		
	},
	delete : function(product, callback){
		var sql = "delete from productinfo where id=?";
		db.execute(sql, [product.id],  function(status){
			callback(status);
		});
	}
}	


