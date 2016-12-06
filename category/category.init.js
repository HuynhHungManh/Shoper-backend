/**
 * Created by PC on 10/8/2016.
 */
exports.initCategoryRouter = function initCategoryRouter(app) {
    var passport = require('passport');

    app.get('/category/fetch', passport.authenticate('jwt',{session:false}),function fetchListCategorys(req, res) {
        var Category = require('./category.object');

        Category.find(function(err, docs) {
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
    app.post('/category/create', passport.authenticate('jwt',{session:false}),function createCategorys(req, res) {

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
            };
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
    });
    app.post('/category/update', passport.authenticate('jwt',{session:false}),function updateCategorys(req, res) {
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
            };
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
    });
    app.get('/category/delete', passport.authenticate('jwt',{session:false}),function deleteCategorys(req, res) {
        var Category = require('./category.object');

        Category.remove({
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