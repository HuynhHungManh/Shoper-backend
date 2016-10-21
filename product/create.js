/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createProducts(req, res) {


    var product = require('./product.object');
    var myProduct = new product();
    myProduct.setProduct(req.body.code, req.body.name,  req.body.image, req.body.detail_b ,  req.body.detail_pc,
        req.body.detail_rp, req.body.availability ,req.body.price, req.body.category_id,req.body.user_id);

    GLOBAL.db.collection('product').insertOne(myProduct.getProduct(),
        function (err, doc) {
            if (err) {
                res.status(400).json({message: err})
            }
            else
                res.status(201).json(doc.ops[0]);
        }
    );
};