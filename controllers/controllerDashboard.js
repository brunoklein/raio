var modelHome = require('../models/modelHome');

exports.dashboard = function(req, res) {
    res.render('dashboard', modelHome);
};

exports.insertIten = function(req, res) {
    var iten = {
        image: '/img/img-item-1.png',
        name: req.query.name,
        price: req.query.price
    };
    modelHome.insertIten(iten);
    res.render('dashboard', modelHome);
};

exports.deleteIten = function(req, res) {
    var id = req.params.id;
    modelHome.deleteIten(id);
    res.render('dashboard', modelHome);
};