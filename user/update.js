/**
 * Created by PC on 10/8/2016.
 */
module.exports = function updates(req, res) {
    var errorHandler = function (status, message) {
        res.status(status).json({
            message: message.toString()
        });
    };

    try {
        var User = require('./user.object');
        var Role = require('../role/role.object');
        var validateObjectExist = require('../utils/validateObjectExist');
        var validatePropertyObject = require('../utils/validatePropertyObject');

        var createUser = function (user) {

            user.username = req.body.username;
            user.password = req.body.password;
            user.islock = req.body.islock;
            user.role = req.body.role._id;
            user.save(function (err, doc) {
                if (err) {
                    errorHandler(400, err);
                }
                else {
                    res.status(201).json(doc);
                }
            });
            };
        User.findById(req.body._id, function (err, response) {

            Promise.all([
                validatePropertyObject.call(null, req.body, ['username', 'password','role','islock']),
                validateObjectExist.call(null, Role, req.body.role._id)])
                .then(createUser.bind(null, response))
                .catch(function (err) {
                    errorHandler(err.status, err.message);
                });
        });
    }
    catch (ex) {
        console.log('create user: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};