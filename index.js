require('./config');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var passport = require('passport');
var multer = require('multer');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize());
require('./config/passport')(passport);

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
});
var upload = multer({ //multer settings
    storage: storage
}).single('file');
/** API path that will upload the files */
app.post('/upload', function(req, res) {
    console.log(req.body);
    upload(req,res,function(err){
        if(err){
            res.json({error_code:1,err_desc:err});
            return;
        }
        res.json({error_code:0,err_desc:null});
    })
});


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