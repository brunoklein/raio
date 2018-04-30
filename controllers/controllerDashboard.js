var modelHome = require('../models/modelHome');

exports.dashboard = function(req, res) {
    res.render('dashboard', modelHome);
};

exports.insertIten = function(req, res) {
    var iten = {image: '/img/img-item-1.png', name: req.query.name, price: req.query.price};
    //console.log('Insert iten ' + req.query.price);
    //modelHome.itens.push(req.query);
    modelHome.itens.push(iten);
    res.render('dashboard', modelHome);
};

exports.deleteIten = function(req, res) {
    modelHome.itens.splice(req.params.id, 1);
    res.render('dashboard', modelHome);
};