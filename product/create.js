/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function createProducts() {
    var router = require('express').Router();

    router.post('/product/create', function (req,res){
        var products = [
            {
                "id": 1,
                "image": "resource/user/themes/images/ladies/1.jpg",
                "detail": "Váy công sở",
                "read": "Read more >>",
                "price": "$17.25"
            },
            {
                "id": 2,
                "image": "resource/user/themes/images/ladies/2.jpg",
                "detail": "Váy đi chơi",
                "read": "Read more >>",
                "price": "$19.29"
            },
            {
                "id": 3,
                "image": "resource/user/themes/images/ladies/3.jpg",
                "detail": "Váy mùa đông",
                "read": "Read more >>",
                "price": "$19.30"
            },
            {
                "id": 4,
                "image": "resource/user/themes/images/ladies/4.jpg",
                "detail": "Áo kiểu, quần ngắn",
                "read": "Read more >>",
                "price": "$27.25"
            }
        ];


        res.status(200).json(products);
    });
    return router;
};