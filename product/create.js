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

        Promise.all([
            validatePropertyObject.call(null, req.body, ['category', 'user']),
            validateObjectExist.call(null, Category, req.body.category),
            validateObjectExist.call(null, User, req.body.user)
        ])
            .then(createProduct)
            .catch(function(err) {
                errorHandler(err.status, err.message);
            });

    }
    catch (ex) {
        console.log('create product: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};
