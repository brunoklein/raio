var modelHome = require('../models/modelHome');

exports.home = function(req, res) {
    //res.render('home');
    res.render('home', modelHome);
};

exports.getList = function(req, res) {
    res.render('home', modelHome);
};

exports.getItem = function(req, res) {
    res.render('home_id', modelHome.itens[req.params.id]);
};
