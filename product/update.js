/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function updateProducts() {
    var router = require('express').Router();

    router.post('/product/update', function (req,res) {
        res.status(200).json({"data":"manhhung"})
    });
    return router;
};