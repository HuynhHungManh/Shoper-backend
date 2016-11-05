/**
 * Created by PC on 10/8/2016.
 */
module.exports = function fetchListGroups(req, res) {

    var group = require('./group.object');

    group.find({})
        .populate('products.product')
        .populate('group_type')
        .exec(function(err, docs) {
            if (err) {
                res.status(400).json({
                    message: err
                });
            }
            else {
                res.status(200).json(docs);
            }
        });
};

