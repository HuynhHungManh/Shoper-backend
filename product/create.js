/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createProducts(req, res) {
    var errorHandler = function(status, message) {
        res.status(status).json({
            message: message.toString()
        });
    };

    try {
        var product = require('./product.object');
        var validateObjectExist = require('../utils/validateObjectExist');
        var validatePropertyObject = require('../utils/validatePropertyObject');
        var ObjectId = require("mongodb").ObjectId;

        var myProduct = new product(
            req.body.code,
            req.body.name,
            req.body.image,
            req.body.detail_b,
            req.body.detail_pc,
            req.body.detail_rp,
            req.body.availability,
            req.body.price,
            req.body.category_id,
            req.body.user_id);

        var validateAllObjectExist = function() {
            validateObjectExist('category', req.body.category_id)
                .then(function() {
                    validateObjectExist('user', req.body.user_id)
                        .then(
                            createProduct, errorHandler.bind(null, 400)
                        );
                }, errorHandler.bind(null, 400))
                .catch(function(err) {
                    errorHandler(500, err);
                });
        }

        validatePropertyObject(myProduct, ['category_id', 'user_id'])
            .then(validateAllObjectExist, errorHandler.bind(null, 400));

        var createProduct = function() {
            GLOBAL.db.collection('product').insertOne(myProduct.getProduct(),
                function(err, doc) {
                    if (err) {
                        errorHandler(400, err);
                    }
                    else {
                        res.status(201).json(doc.ops[0]);
                    }
                }
            );
        }
    }
    catch (ex) {
        console.log('create product: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};
