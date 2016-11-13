/**
 * Created by PC on 10/16/2016.
 */


var mongoose = require("mongoose");

var Group_typeSchema = mongoose.Schema({
    code: String
});

module.exports = mongoose.model('Group_type', Group_typeSchema);