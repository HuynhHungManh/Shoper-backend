/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createProducts(req, res) {
    try {
        var product = require('./product.object');
        var validateObjectExist = require('../utils/validateObjectExist');
        var validatePropertyObject = require('../utils/validatePropertyObject');
        var ObjectId = require("mongodb").ObjectId;
        var errorHandlers = require("../utils/errorHandlers");

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

        var callbackValidateObjectExist = {
            success: function() {
                validateObjectExist('user', req.body.user_id, res, {
                    success: createProduct
                });
            },
            error: function(message) {
                errorHandlers(res, 400, message);
            }
        };

        var callbackValidateProperty = {
            success: function() {
                validateObjectExist('category', req.body.category_id, res, callbackValidateObjectExist);
            },
            error: function(message) {
                errorHandlers(res, 400, message);
            }
        };

        validatePropertyObject(myProduct, ['category_id', 'user_id'], callbackValidateProperty);

        var createProduct = function() {
            GLOBAL.db.collection('product').insertOne(myProduct.getProduct(),
                function(err, doc) {
                    if (err) {
                        res.status(400).json({
                            message: err
                        })
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
        errorHandlers(res, 500, {
            message: ex.toString()
        });
    }
};
