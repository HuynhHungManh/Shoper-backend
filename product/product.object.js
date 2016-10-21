/**
 * Created by PC on 10/16/2016.
 */
var product = function () {

    this.setProduct = function (code, name, image,  detail_b,detail_pc,
                                detail_rp,availability,price,category_id,user_id) {
        this.code = code;
        this.name = name;
        this.image = image;
        this.detail_b = detail_b;
        this.detail_pc = detail_pc;
        this.detail_rp = detail_rp;
        this.availability = availability;
        this.price = price;
        this.category_id = category_id;
        this.user_id = user_id;
    };

    this.getProduct = function () {
        return {
            code: this.code,
            name: this.name,
            image: this.image,
            detail_b: this.detail_b,
            detail_pc: this.detail_pc,
            detail_rp: this.detail_rp,
            availability: this.availability,
            price: this.price,
            category_id: this.category_id,
            user_id: this.user_id
        }
    };
};
module.exports = product;