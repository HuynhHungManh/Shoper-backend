/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function createWedding_dress() {
    var router = require('express').Router();

    router.post('/product/wedding_dress/create', function (req,res){
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
            },
            {
                "id": 5,
                "image": "resource/user/themes/images/ladies/7.jpg",
                "detail": "Áo kiểu, quần rộng, mát mẻ",
                "read": "Read more >>",
                "price": "$30.25"
            },
            {
                "id": 6,
                "image": "resource/user/themes/images/ladies/6.jpg",
                "detail": "Váy thời trang",
                "read": "Read more >>",
                "price": "$40"
            },
            {
                "id": 7,
                "image": "resource/user/themes/images/ladies/8.jpg",
                "detail": "Váy xòe",
                "read": "Read more >>",
                "price": "$20.23"
            },
            {
                "id": 8,
                "image": "resource/user/themes/images/ladies/9.jpg",
                "detail": "Váy phong cách",
                "read": "Read more >>",
                "price": "$29.25"
            },
            {
                "id": 9,
                "image": "resource/user/themes/images/ladies/5.jpg",
                "detail": "Váy phong cách tây",
                "read": "Read more >>",
                "price": "$50.23"
            },
            {
                "id": 10,
                "image": "resource/user/themes/images/ladies/1.jpg",
                "detail": "Váy công sở"

            },
            {
                "id": 11,
                "image": "resource/user/themes/images/ladies/2.jpg",
                "detail": "Váy đi chơi"

            },
            {
                "id": 12,
                "image": "resource/user/themes/images/ladies/3.jpg",
                "detail": "Váy mùa đông"
            }
        ];


        res.status(200).json(products);
    });
    return router;
};