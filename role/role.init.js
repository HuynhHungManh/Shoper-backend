/**
 * Created by PC on 10/8/2016.
 */
exports.initRoleRouter = function initRoleRouter(app) {

    var passport = require('passport');
    app.get('/role/fetch',passport.authenticate('jwt',{session:false}),function fetchListRoles(req, res) {

        var Role = require('./role.object');
        Role.find(function(err, docs) {
            if (err) {
                res.status(400).json({
                    message: err
                });
            }
            else {
                res.status(200).json({ "data" : docs});
            }
        });
    });
    app.post('/role/create',passport.authenticate('jwt',{session:false}), function createRoles(req, res) {

        var errorHandler = function(status, message) {
            res.status(status).json({
                message: message.toString()
            });
        };

        try{
            var Role = require('./role.object');
            var validatePropertyObject = require('../utils/validatePropertyObject');

            var createRole= function() {
                var role = new Role({
                    name: req.body.name,
                    code: req.body.code
                });

                role.save(function(err, doc) {
                    if (err) {
                        errorHandler(400, err);
                    }
                    else {
                        res.status(201).json(doc);
                    }
                });
            }
            Promise.all([validatePropertyObject.call(null, req.body, ['code', 'name'])])
                .then(createRole)
                .catch(function(err) {
                    errorHandler(err.status, err.message);
                });
        }
        catch (ex) {
            console.log('create role: ' + ex.toString() + ' inline: ' + ex.stack);
            errorHandler(500, ex);
        }
    });
    app.post('/role/update',passport.authenticate('jwt',{session:false}) ,function updateRoles(req, res) {

        var errorHandler = function (status, message) {
            res.status(status).json({
                message: message.toString()
            });
        };

        try {
            var Role = require('./role.object');
            var validatePropertyObject = require('../utils/validatePropertyObject');

            var createRole = function (role) {
                role.name = req.body.name;
                role.code = req.body.code;



                role.save(function (err, doc) {
                    if (err) {

                        errorHandler(400, err);
                    }
                    else {

                        res.status(201).json(doc);
                    }
                });
            }

            Role.findById(req.body._id, function (err, response) {
                Promise.all([validatePropertyObject.call(null, req.body, ['name'])])
                    .then(createRole.bind(null, response))
                    .catch(function (err) {
                        errorHandler(err.status, err.message);
                    });
            });
        }
        catch (ex) {
            console.log('update categories: ' + ex.toString() + ' inline: ' + ex.stack);
            errorHandler(500, ex);
        }
    });
    app.get('/role/delete',passport.authenticate('jwt',{session:false}), function deleteRoles(req, res) {
        var Role = require('./role.object');

        Role.remove({
                _id: req.query.id
            },
            function(err, doc) {
                if (err)
                    res.status(400).json({
                        message: err
                    });
                else
                    res.status(200).json({
                        message: "delete success"
                    })
            });

    });
};