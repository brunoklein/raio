var modelHome = require('../models/modelHome');

exports.index = function(req, res) {
    res.render('index');
};

exports.itensList = function(req, res) {
    res.render('home', modelHome);
};

exports.getItem = function(req, res) {
    res.render('home_id', modelHome.itens[req.params.id]);
};
