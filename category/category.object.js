/**
 * Created by PC on 10/16/2016.
 */
var mongoose = require("mongoose");
var CategorySchema = mongoose.Schema({
    name: String,
    code: String
});
module.exports = mongoose.model('Category', CategorySchema);