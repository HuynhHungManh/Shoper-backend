/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createProducts(req, res) {
    var product = require('./product.object');
    var myProduct = new product();
    myProduct.setProduct(req.body.name, req.body.service, req.body.price, req.body.phone, req.body.img);
    console.log(req.body.name);

    GLOBAL.db.collection('product').insertOne(
        myProduct.getProduct(),
        function (err, doc) {
            if (err) {
                res.status(400).json({message: err})
            }
            else
                res.status(201).json(doc.ops[0]);
                console.log(myProduct);
        }
    );
};