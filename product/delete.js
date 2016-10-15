/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function deleteProducts() {
    var router = require('express').Router();

    router.get('/product/delete', function (req,res) {
        res.status(200).json({"data":"manhhung"})
    });
    return router;
};