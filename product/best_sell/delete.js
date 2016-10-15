/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function deleteBest_sell() {
    var router = require('express').Router();

    router.get('/product/best_sell/delete', function (req,res) {
        res.status(200).json({"data":"manhhung"})
    });
    return router;
};