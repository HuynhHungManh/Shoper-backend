require('./config');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var passport = require('passport');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize());
require('./config/passport')(passport);


var server = app.listen(process.env.port | 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});

var opt = {
    user: 'manhhung',
    pass: 'manhhung123',
    auth: {
        authdb: 'manhhung'
    }
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ds059316.mlab.com:59316/manhhung', opt, function(err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    console.log("Database connected");

    require('./product/product.init').initProductRouter(app);
    require('./category/category.init').initCategoryRouter(app);
    require('./group/group.init').initGroupRouter(app);
    require('./group_type/group_type.init').initGroup_typeRouter(app);
    require('./user/user.init').initUserRouter(app);
    require('./role/role.init').initRoleRouter(app);
    require('./login/init').initLoginRouter(app);
});