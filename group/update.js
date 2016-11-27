/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function updateGroups(req, res) {

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


        var createGroup = function(group) {
            group.group_type = req.body.group_type;
            group.product = req.body.product;


            group.save(function(err, doc) {
                if (err) {
                    errorHandler(400, err);
                }
                else {
                    res.status(201).json(doc);
                }
            });
        }

        Group.findById(req.body._id, function (err, response) {
            Promise.all([
                validateObjectExist.call(null, Group_type, req.body.group_type._id),
                validateObjectExist.call(null, Product, req.body.product._id)
            ])
                .then(createGroup.bind(null, response))
                .catch(function (err) {
                    errorHandler(err.status, err.message);
                });
        });
    }
    catch (ex) {
        console.log('create group: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};

