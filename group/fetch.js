/**
 * Created by PC on 10/8/2016.
 */
module.exports = function fetchListGroups(req, res) {
    var Group = require('./group.object');
    var Group_type = require('../group_type/group_type.object');
    var Product = require('../product/product.object');


    Group.find({})
        .populate('group_type')
        .populate('product')
        .exec(function(err, docs) {
            if (err) {
                res.status(400).json({
                    message: err
                });
            }
            else {
                res.status(200).json({ "data" : docs});
            }
        });
};

