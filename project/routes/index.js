var model = require('../lib/model');

exports.login = function(req, res){
  res.render('index', { title: 'login page' });
};


exports.profiles = function(req, res){
	model.getUsers(function(err, rows){
	  res.render('profiles', {
  		   title: 'For fun',
  			rows : rows });
	});
};
