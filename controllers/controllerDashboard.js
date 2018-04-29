var modelHome = require('../models/modelHome');

exports.dashboard = function(req, res) {
    console.log('Dashboard');
    res.render('dashboard', modelHome);
};

exports.insert = function(req, res) {
    //console.log('Insert iten');
    res.send(req.iten-name);
};

exports.delete = function(req, res) {
    //console.log('Delete iten');
    res.send(req.iten-name);
};