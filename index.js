// var http = require("http");
//
// http.createServer(function(request, response) {
//
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(8888);

require('./config');
var express = require('express');
var app  = express();
var bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors());



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

var server = app.listen(process.env.port | 8080 , function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

require('./product/init').initProductRouter(app);
require('./product/best_sell/init').initBestSellRouter(app);
require('./product/wedding_dress/init').initBestWeddingDress(app);

// app.get('/',function (req , res) {
//     res.status(200).json({"abc":"123241"});
// });
//
// app.post('/product',function (req ,res) {
//     res.status(200).json(req.body);
// });

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


