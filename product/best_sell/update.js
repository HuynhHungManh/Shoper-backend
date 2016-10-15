/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function updateBest_sell() {
    var router = require('express').Router();

    router.post('/product/best_sell/update', function (req,res) {
        res.status(200).json({"data":"manhhung"})
    });
    return router;
};