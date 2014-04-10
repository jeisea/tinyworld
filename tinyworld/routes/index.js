
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Welcome to Tiny World' });
};

exports.getProfiles = function (req, res) {
    res.render('profiles', {title: 'TinyWorld'});
};
