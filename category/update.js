/**
 * Created by PC on 10/8/2016.
 */
module.exports = function updateCategorys(req, res) {
    var errorHandler = function(status, message) {
        res.status(status).json({
            message: message.toString()
        });
    };
    try {
        var Category = require('./category.object');

        var validatePropertyObject = require('../utils/validatePropertyObject');



        var createCategory = function(category) {
            category.name = req.body.name;
            category.code = req.body.code;

            category.save(function(err, doc) {
                if (err) {
                    errorHandler(400, err);
                }
                else {
                    res.status(201).json(doc);
                }
            });
        }
        Category.findById(req.body._id, function (err, response) {
            Promise.all([validatePropertyObject.call(null, req.body, ['code', 'name'])])
                .then(createCategory.bind(null, response))
                .catch(function(err) {
                     errorHandler(err.status, err.message);
                    console.log(err.status);
                });
        });
    }
    catch (ex) {
        console.log('update categories: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};