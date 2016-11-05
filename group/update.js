/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function updateGroups(req, res) {

    var ObjectId = require("mongodb").ObjectId;
    var errorHandler = function(status, message) {
        res.status(status).json({
            message: message.toString()
        });
    };
    try {
        var Group = require('./group.object');
        var validateObjectExist = require('../utils/validateObjectExist');
        var validatePropertyObject = require('../utils/validatePropertyObject');

        var validateAllObjectExist = function() {
            validateObjectExist('product', req.body.product_id)
                .then(function() {
                    validateObjectExist('group_type', req.body.group_type_id)
                        .then(
                            createGroup, errorHandler.bind(null, 400)
                        );
                }, errorHandler.bind(null, 400))
                .catch(function(err) {
                    errorHandler(500, err);
                });
        }

        validatePropertyObject(req.body, ['product_id', 'group_type_id'])
            .then(validateAllObjectExist, errorHandler.bind(null, 400));

        var createGroup = function() {
            var group = new Group({
                product : req.body.product_id,
                group_type: req.group_type_id
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

        createGroup();
    }
    catch (ex) {
        console.log('create group: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};

