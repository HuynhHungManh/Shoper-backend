/**
 * Created by PC on 10/16/2016.
 */
var mongoose = require("mongoose");

var ProductSchema = mongoose.Schema({
    name: String,
    code: String,
    image: String,
    detail_b: String,
    detail_pc: String,
    detail_rp: String,
    availability: String,
    price: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Product', ProductSchema);