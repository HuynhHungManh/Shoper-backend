/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function updateWedding_dress() {
    var router = require('express').Router();

    router.post('/product/wedding_dress/update', function (req,res) {
        res.status(200).json({"data":"manhhung"})
    });
    return router;
};