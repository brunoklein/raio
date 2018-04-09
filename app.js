var express = require('express');
var app = express();
var port = 3000;
var names = ["Bruno", "Dudu", "Edu"];

//set view engine
app.set("view engine","jade");

// app.get('/', function (req, res) {
//     res.render('home', { itens: names });
// });

// define routes
var home = require('./routes/routerHome');
var dashboard = require('./routes/routerDashboard');

// set controllers
app.use('/', home);
app.use('/dashboard', dashboard);

var server = app.listen(port, function () {
    console.log('Node server is running on port ' + port);
});

module.exports = app;