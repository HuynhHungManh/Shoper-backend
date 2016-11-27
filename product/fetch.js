/**
 * Created by PC on 10/8/2016.
 */
module.exports = function fetchListProducts(req, res) {
    var Product = require('./product.object');
    var Category = require('../category/category.object');
    var User = require('../user/user.object');



    Product.find({})
        .populate('category')
        .populate('user')
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
