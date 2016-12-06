/**
 * Created by PC on 10/8/2016.
 */
exports.initGroup_typeRouter = function initGroup_typeRouter(app) {
    var passport = require('passport');

    app.get('/group_type/fetch', passport.authenticate('jwt',{session:false}),function fetchListGroups_type(req, res) {


        var Group_type = require('../group_type/group_type.object');

        Group_type.find(function(err, docs) {
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
    app.post('/group_type/create',passport.authenticate('jwt',{session:false}), function createGroups_type(req, res) {

        var errorHandler = function(status, message) {
            res.status(status).json({
                message: message.toString()
            });
        };

        try {
            var Group_type = require('../group_type/group_type.object');

            var validatePropertyObject = require('../utils/validatePropertyObject');


            var createGroup_type = function() {
                var group_type = new Group_type({
                    code: req.body.code
                });
                group_type.save(function(err, doc) {
                    if (err) {
                        errorHandler(400, err);
                    }
                    else {
                        res.status(201).json(doc);
                    }
                });
            };

            Promise.all([
                validatePropertyObject.call(null, req.body, ['code'])])
                .then(createGroup_type)
                .catch(function(err) {
                    errorHandler(err.status, err.message);
                });
        }
        catch (ex) {
            console.log('create group_type: ' + ex.toString() + ' inline: ' + ex.stack);
            errorHandler(500, ex);
        }
    });
    app.post('/group_type/update',passport.authenticate('jwt',{session:false}), function updateGroups_type(req, res) {

        var errorHandler = function (status, message) {
            res.status(status).json({
                message: message.toString()
            });
        };

        try {
            var Group_type = require('../group_type/group_type.object');

            var validatePropertyObject = require('../utils/validatePropertyObject');


            var createGroup_type = function (group_type) {

                group_type.code = req.body.code;

                group_type.save(function (err, doc) {
                    if (err) {
                        errorHandler(400, err);
                    }
                    else {
                        res.status(201).json(doc);
                    }
                });
            };
            Group_type.findById(req.body._id, function (err, response) {
                Promise.all([
                    validatePropertyObject.call(null, req.body, ['code'])])
                    .then(createGroup_type.bind(null, response))
                    .catch(function (err) {
                        errorHandler(err.status, err.message);
                    });
            });
        }
        catch (ex) {
            console.log('create group_type: ' + ex.toString() + ' inline: ' + ex.stack);
            errorHandler(500, ex);
        }


    });
    app.get('/group_type/delete',passport.authenticate('jwt',{session:false}), function deleteGroups_type(req, res) {

        var group_type = require('./group_type.object');

        group_type.remove({
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