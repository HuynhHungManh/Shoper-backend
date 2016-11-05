/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createGroups(req, res) {

    var errorHandler = function(status, message) {
        res.status(status).json({
            message: message.toString()
        });
    };

    try {
        var Group = require('./group.object');
        var Group_type = require('../group_type/group_type.object');
        var Product = require('../product/product.object');
        var validateObjectExist = require('../utils/validateObjectExist');
        var validatePropertyObject = require('../utils/validatePropertyObject');

        var validateAllObjectExist = function() {
            validateObjectExist(Group_type, req.body.group_type)
                .then(function() {
                    validateObjectExist(Product, req.body.product)
                        .then(
                            createGroup, errorHandler.bind(null, 400)
                        );
                }, errorHandler.bind(null, 400))
                .catch(function(err) {
                    errorHandler(500, err);
                });
        }

        validatePropertyObject(req.body, ['group_type', 'product'])
            .then(validateAllObjectExist, errorHandler.bind(null, 400));

        var createGroup = function() {
            var group = new Group({
                group_type: req.body.group_type,
                product: req.body.product
            });

            group.save(function(err, doc) {
                if (err) {
                    errorHandler(400, err);
                }
                else {
                    res.status(201).json(doc);
                }
            });
        }
    }
    catch (ex) {
        console.log('create group: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};



