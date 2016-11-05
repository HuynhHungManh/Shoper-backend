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
        var Product = require('./product.object');
        var Category = require('../category/category.object');
        var User = require('../user/user.object');
        var validateObjectExist = require('../utils/validateObjectExist');
        var validatePropertyObject = require('../utils/validatePropertyObject');

        var validateAllObjectExist = function() {
            validateObjectExist('category', req.body.category)
                .then(function() {
                    validateObjectExist('user', req.body.user)
                        .then(
                            createProduct, errorHandler.bind(null, 400)
                        );
                }, errorHandler.bind(null, 400))
                .catch(function(err) {
                    errorHandler(500, err);
                });
        }

        validatePropertyObject(req.body, ['category', 'user'])
            .then(createProduct, errorHandler.bind(null, 400));

        var createProduct = function() {
            var product = new Product({
                code: req.body.code,
                name: req.body.name,
                image: req.body.image,
                detail_b: req.body.detail_b,
                detail_pc: req.body.detail_pc,
                detail_rp: req.body.detail_rp,
                availability: req.body.availability,
                price: req.body.price,
                category: req.body.category,
                user: req.body.user

            });

            product.save(function(err, doc) {
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
        console.log('create product: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};
