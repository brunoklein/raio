var modelHome = require('../models/modelHome');

exports.dashboard = function(req, res) {
    res.render('dashboard', modelHome);
};

exports.insertItem = function(req, res) {
    var item = {
        image: '/img/img-item-1.png',
        name: req.query.name,
        price: req.query.price
    };
    modelHome.insertItem(item);
    res.render('dashboard', modelHome);
};

exports.deleteItem = function(req, res) {
    var id = req.params.id;
    modelHome.deleteItem(id);
    res.render('dashboard', modelHome);
};