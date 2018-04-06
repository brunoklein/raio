var express = require('express');
var app = express();
var port = 3000;

//set view engine
app.set("view engine","jade")

app.get('/', function (req, res) {
    res.render('home', { itens: name });
});

var server = app.listen(port, function () {
    console.log('Node server is running on port ' + port);
});