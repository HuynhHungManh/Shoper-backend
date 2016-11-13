/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createCategorys(req, res) {

    var errorHandler = function(status, message) {
        res.status(status).json({
            message: message.toString()
        });
    };
    try{
        var Category = require('./category.object');
        var validatePropertyObject = require('../utils/validatePropertyObject');


        var createCategory = function() {
            var category = new Category({
                name: req.body.name,
                code: req.body.code
            });

            category.save(function(err, doc) {
                if (err) {
                    errorHandler(400, err);
                }
                else {
                    res.status(201).json(doc);
                }
            });
        }
        Promise.all([validatePropertyObject.call(null, req.body, ['code', 'name'])])
            .then(createCategory)
            .catch(function(err) {
                errorHandler(err.status, err.message);
            });
    }
    catch (ex) {
        console.log('create category: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};
