/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function deleteWedding_dress() {
    var router = require('express').Router();

    router.get('/product/wedding_dress/delete', function (req,res) {
        res.status(200).json({"data":"manhhung"})
    });
    return router;
};