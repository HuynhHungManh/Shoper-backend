/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function updates(req, res) {
    var ObjectId = require("mongodb").ObjectId;
    var errorHandler = function(status, message) {
        res.status(status).json({
            message: message.toString()
        });
    };

    try {
        var User = require('./user.object');
        var validateObjectExist = require('../utils/validateObjectExist');
        var validatePropertyObject = require('../utils/validatePropertyObject');

        var validateAllObjectExist = function() {
            validateObjectExist('role', req.body.role_id)
                .then(createUser, errorHandler.bind(null, 400))
                .catch(function(err) {
                    errorHandler(500, err);
                });
        }

        validatePropertyObject(req.body, ['role_id'])
            .then(validateAllObjectExist, errorHandler.bind(null, 400));

        var createUser = function() {
            var user = new User({
                username: req.body.username,
                password: req.body.password,
                role: req.body.role_id
            });
            user.save(function(err, doc) {
                if (err) {
                    errorHandler(400, err);
                }
                else {
                    res.status(201).json(doc);
                }
            });
        }
        createUser();
    }
    catch (ex) {
        console.log('create user: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};