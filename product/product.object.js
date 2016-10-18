/**
 * Created by PC on 10/16/2016.
 */
var product = function () {

    this.setProduct = function (name, service, price, phone, img) {
        this.name = name;
        this.service = service;
        this.price = price;
        this.phone = phone;
        this.img = img;
    };

    this.getProduct = function () {
        return {
            name: this.name,
            service: this.service,
            price: this.price,
            phone: this.phone,
            img: this.img
        }
    };
};
module.exports = product;