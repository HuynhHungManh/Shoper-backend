/**
 * Created by PC on 10/16/2016.
 */
var mongoose = require("mongoose");
var GroupSchema = mongoose.Schema({
    group_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group_type'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
});
module.exports = mongoose.model('group', GroupSchema);






