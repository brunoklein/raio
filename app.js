var express = require('express');
var app = express();
var port = 3000;

//set view engine
app.set("view engine","jade");

// app.get('/', function (req, res) {
//     res.render('home', { itens: names });
// });

// define routes
var home = require('./routes/routerHome');
var dashboard = require('./routes/routerDashboard');

// set controllers and dirs
app.use('/dashboard/insert', dashboard);
app.use('/dashboard', dashboard);
app.use('/', home);
app.use(express.static(__dirname + '/public'));

var server = app.listen(port, function () {
    console.log('Laís server is running on port ' + port);
});

module.exports = app;