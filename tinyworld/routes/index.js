
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



// Login page. 
// 
// If new user, bring to new-user page
// else, bring to profile page

exports.login = function (req, res){
	var user = req.session.user;
	if(user){
		res.redirect('profile');
	}
	else{
		res.render('login', {
			title: 'tinyWorld',
			loginerr: req.flash('authorize'),
			registererr: req.flash('register')
		});
	}
};

exports.authorize = function(req, res){
	var username = req.body.user;
	var password = req.body.pass;
	if( !username || !password) {
		res.flash('authorize', "Must provide username and password");
		res.redirect('/');
	}
	else{
		users.validate(username, password, function(err, user){
			if(err){
				req.flash('authorize', err);
				res.redirect('/');
			}
			else{
				req.session.user = user;
				res.redirect('profile');
			}
		});
	}
};

exports.register = function(req, res){
	var username = req.body.user;
	var password = req.body.pass;
	if (!username || !password) {
    	req.flash('register', 'Must provide username and password');
    	res.redirect('/');
  	}
  	else{
  		users.exists(username , function (exists){
  			//People may have same name, so we'll allow duplicates
  			users.add(username, password, function(err, user){
  				if(err){
  					req.flash('register', 'There was a problem with registration. Please try again!');
  					res.redirect('/');
  				}
  				else{
  					req.session.user = user;
  					res.redirect('profile');
  				}
  			});
  		});
  	}
};

