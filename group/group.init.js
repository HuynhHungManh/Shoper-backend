/**
 * Created by PC on 10/8/2016.
 */
exports.initGroupRouter = function initGroupRouter(app) {
    var passport = require('passport');

    app.get('/group/fetch', passport.authenticate('jwt', {session: false}), function fetchListGroups(req, res) {
        var Group = require('./group.object');
        var Group_type = require('../group_type/group_type.object');
        var Product = require('../product/product.object');
        Group.find({})
            .populate('group_type')
            .populate('product')
            .exec(function (err, docs) {
                if (err) {
                    res.status(400).json({
                        message: err
                    });
                }
                else {
                    res.status(200).json({"data": docs});
                }
            });
    });

    app.post('/group/create', passport.authenticate('jwt', {session: false}), function createGroups(req, res) {
        try {
            var Group = require('./group.object');
            var Group_type = require('../group_type/group_type.object');
            var Product = require('../product/product.object');
            var validateObjectExist = require('../utils/validateObjectExist');
            var validatePropertyObject = require('../utils/validatePropertyObject');

            var errorHandler = function (status, message) {
                res.status(status).json({
                    message: message.toString()
                });
            };
            var createGroup = function () {
                var group = new Group({
                    group_type: req.body.group_type,
                    product: req.body.product
                });

                group.save(function (err, doc) {
                    if (err) {
                        errorHandler(400, err);
                    }
                    else {
                        res.status(201).json(doc);
                    }
                });
            };
            Promise.all([
                validatePropertyObject.call(null, req.body, ['group_type', 'product']),
                validateObjectExist.call(null, Group_type, req.body.group_type),
                validateObjectExist.call(null, Product, req.body.product)])
                .then(createGroup)
                .catch(function (err) {
                    errorHandler(err.status, err.message);
                });

        }
        catch (ex) {
            console.log('create group: ' + ex.toString() + ' inline: ' + ex.stack);
            errorHandler(500, ex);
        }
    });

    app.post('/group/update', passport.authenticate('jwt', {session: false}), function updateGroups(req, res) {
        var errorHandler = function (status, message) {
            res.status(status).json({
                message: message.toString()
            });
        };
        try {
            var Group = require('./group.object');
            var Group_type = require('../group_type/group_type.object');
            var Product = require('../product/product.object');
            var validateObjectExist = require('../utils/validateObjectExist');
            var createGroup = function (group) {
                group.group_type = req.body.group_type;
                group.product = req.body.product;
                group.save(function (err, doc) {
                    if (err) {
                        errorHandler(400, err);
                    }
                    else {
                        res.status(201).json(doc);
                    }
                });
            };
            Group.findById(req.body._id, function (err, response) {
                Promise.all([
                    validateObjectExist.call(null, Group_type, req.body.group_type._id),
                    validateObjectExist.call(null, Product, req.body.product._id)
                ])
                    .then(createGroup.bind(null, response))
                    .catch(function (err) {
                        errorHandler(err.status, err.message);
                    });
            });
        }
        catch (ex) {
            console.log('create group: ' + ex.toString() + ' inline: ' + ex.stack);
            errorHandler(500, ex);
        }
    });

    app.get('/group/delete', passport.authenticate('jwt', {session: false}), function deleteGroups(req, res) {
        var group = require('./group.object');
        group.remove({
                _id: req.query.id
            },
            function (err, doc) {
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