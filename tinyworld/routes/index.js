
var users = require('../routes/user');


//This one was here by default. Not necessary
exports.index = function(req, res){

  res.render('index', { title: 'Welcome to Tiny World' });
};


exports.getProfiles = function (req, res) {
    res.render('profiles', {title: 'TinyWorld'});
};



exports.home = function(req,res){
	res.render('home', {title: 'Home'});
};

exports.toprankings = function(req, res){
	res.render('toprankings', {title: 'Top Rankings'});
};

exports.profile = function(req, res){
	var uname = 'huygaa11';
	users.getuser(uname, function(err, user){
		if(err)
			console.log('error');
		else
			res.render('profile', {
				user : user
				/*title   : 'Profile',
				fname   : user.fname,
				lname   : user.lname,
				gender  : user.gender,
				age	    : user.age,
				picture : user.*/
			});
	});
};

exports.settings = function(req, res){

};

exports.challenge = function(req, res){
	//Don't have a page yet
};

exports.forgotpw = function(req, res){
	res.render('forgotpw', {title: 'Forgot password'});
};


