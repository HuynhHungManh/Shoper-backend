/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createGroups(req, res) {

    try {
        var Group = require('./group.object');
        var Group_type = require('../group_type/group_type.object');
        var Product = require('../product/product.object');
        var validateObjectExist = require('../utils/validateObjectExist');
        var validatePropertyObject = require('../utils/validatePropertyObject');

        var errorHandler = function(status, message) {
            res.status(status).json({
                message: message.toString()
            });
        };

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
        };

        Promise.all([
            validatePropertyObject.call(null, req.body, ['group_type', 'product']),
            validateObjectExist.call(null, Group_type, req.body.group_type),
            validateObjectExist.call(null, Product, req.body.product)])
            .then(createGroup)
            .catch(function(err) {
                errorHandler(err.status, err.message);
            });

    }
    catch (ex) {
        console.log('create group: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};



