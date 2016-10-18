require('./config');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongodb = require('mongodb');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



var server = app.listen(process.env.port | 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});


mongodb.MongoClient.connect('mongodb://manhhung:manhhung123@ds059316.mlab.com:59316/manhhung', function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    console.log("Database connected");
    GLOBAL.db = database;
    require('./product/init').initProductRouter(app);
});

