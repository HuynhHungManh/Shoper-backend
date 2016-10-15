/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function fetchListProducts() {
    var router = require('express').Router();

    router.get('/product/fetch', function (req,res) {
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
                "name1": "MẪU",
                "name2": "THIẾT KẾ",
                "image": "resource/user/themes/images/feature_img_2.png",
                "detail": "Được các nhà thiết kế nổi tiếng tài ba khăp thế giới tự tay thiết kế."
            },
            {
                "id": 6,
                "name1": "GIAO HÀNG",
                "name2": "MIỄN PHÍ",
                "image": "resource/user/themes/images/feature_img_1.png",
                "detail": "Miến phí ship hàng free trên khu vực Đà Nẵng."
            },
            {
                "id": 7,
                "name1": "HỖ TRỢ",
                "name2": "24/7",
                "image": "resource/user/themes/images/feature_img_3.png",
                "detail": "Có thể hỗ trợ đường dây nóng 0905491875 24/7! ."
            },
            {
                "id": 8,
                "image": "resource/user/themes/images/vay_cuoi_1.jpg",
                "detail": "Váy công sở",
                "read": "Read more >>",
                "price": "$17.25"
            },
            {
                "id": 9,
                "image": "resource/user/themes/images/vay_cuoi_2.jpg",
                "detail": "Váy đi chơi",
                "read": "Read more >>",
                "price": "$19.29"
            },
            {
                "id": 10,
                "image": "resource/user/themes/images/vay_cuoi_3.jpg",
                "detail": "Váy mùa đông",
                "read": "Read more >>",
                "price": "$19.30"
            },
            {
                "id": 11,
                "image": "resource/user/themes/images/vay_cuoi_4.jpg",
                "detail": "Áo kiểu, quần ngắn",
                "read": "Read more >>",
                "price": "$27.25"
            },
            {
                "id": 12,
                "image": "resource/user/themes/images/vay_cuoi_5.jpg",
                "detail": "Áo kiểu, quần rộng, mát mẻ",
                "read": "Read more >>",
                "price": "$30.25"
            },
            {
                "id": 13,
                "image": "resource/user/themes/images/vay_cuoi_6.jpg",
                "detail": "Váy thời trang",
                "read": "Read more >>",
                "price": "$40"
            },
            {
                "id": 14,
                "image": "resource/user/themes/images/vay_cuoi_7.jpg",
                "detail": "Váy xòe",
                "read": "Read more >>",
                "price": "$20.23"
            },
            {
                "id": 15,
                "image": "resource/user/themes/images/vay_cuoi_8.jpg",
                "detail": "Váy phong cách",
                "read": "Read more >>",
                "price": "$29.25"
            }
        ];
        res.status(200).json(products);
    });
    return router;
};